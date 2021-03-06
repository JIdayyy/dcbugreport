/* eslint-disable no-console */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import * as Minio from 'minio';
import { ApolloError } from 'apollo-server-core';
import { Request } from 'express';
import { PrismaClient } from '.prisma/client';
import getFileType from '../../../utils/getFileType';
import { File, Role } from '../../../generated/graphql';

const { MINIO_USERNAME, MINIO_PASSWORD } = process.env;

const minioClient = new Minio.Client({
  endPoint: 'minio-dc-s3.digitalcopilote.re',
  port: 80,
  useSSL: false,
  accessKey: MINIO_USERNAME as string,
  secretKey: MINIO_PASSWORD as string,
});

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadWebsiteLogo {
  @Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.MANAGER)
  @Mutation(() => File, {
    nullable: false,
  })
  async uploadWebsiteLogo(
    @Ctx() ctx: { prisma: PrismaClient; req: Request },
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<File> {
    const { userId, bugId } = ctx.req.query;

    const stream = createReadStream();

    const metadata = {
      'Content-type': 'image',
    };

    try {
      await minioClient.putObject(
        'dcreport',
        filename,
        stream as Readable,
        metadata
      );

      const newFile = await ctx.prisma.file.create({
        data: {
          name: filename,
          path: `https://minio-dc-s3.digitalcopilote.re/websiteslogos/${filename}`,
          size: 1,
          type: getFileType(filename),
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
    } catch (error) {
      throw new ApolloError('error during upload', error as string);
    }
  }
}
