/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Stream, Readable } from 'stream';
import * as Minio from 'minio';
import { ApolloError } from 'apollo-server-core';
import { Request } from 'express';
import { PrismaClient } from '.prisma/client';
import { File, Role } from '../generated/graphql';

const minioClient = new Minio.Client({
  endPoint: 'minio-dc-s3.digitalcopilote.re',
  port: 80,
  useSSL: false,
  accessKey: 'DigitalCopilote1337',
  secretKey: 'DigitalCopilote1337',
});

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@Resolver()
export class UploadFile {
  @Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)
  @Mutation(() => File, {
    nullable: false,
  })
  async uploadFile(
    @Ctx() ctx: { prisma: PrismaClient; req: Request },
    @Arg('file', () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<File | undefined> {
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
          path: `https://minio-dc-s3.digitalcopilote.re/dcreport/${filename}`,
          size: 1,
          type: filename.split('.')[filename.length - 1] || 'unknown',
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
      console.log(error);
      throw new ApolloError('error during upload', error as string);
    }
  }
}
