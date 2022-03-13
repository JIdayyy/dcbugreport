/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream } from 'stream';
import { Request } from 'express';
import { Dropbox } from 'dropbox';
import { PrismaClient } from '.prisma/client';
import { File } from '../generated/graphql/models/File';

const config = {
  accessToken: process.env.DROPBOX_TOKEN,
};

const dbx = new Dropbox(config);

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadFile {
  @Authorized()
  @Mutation(() => File, {
    nullable: false,
  })
  async uploadFile(
    @Ctx() ctx: { prisma: PrismaClient; req: Request },
    @Arg('file', () => GraphQLUpload) { createReadStream, filename }: Upload
  ): Promise<File> {
    const { userId, bugId } = ctx.req.query;

    const file = await dbx.filesUpload({
      contents: createReadStream(),
      path: `/userid/${userId}/bugid/${bugId}/${filename}`,
    });
    const link = await dbx
      .sharingCreateSharedLinkWithSettings({
        path: file.result.path_display as string,
      })
      .catch((err) => console.log(err));

    if (!file || !link) {
      throw new Error('Error');
    }
    const newFile = await ctx.prisma.file.create({
      data: {
        name: filename,
        path: link.result.url,
        size: 2,
        type: 'test',
        is_disabled: false,
        user: {
          connect: {
            id: userId as string,
          },
        },
        bug: {
          connect: {
            id: bugId as string,
          },
        },
      },
    });

    return newFile;
  }
}
