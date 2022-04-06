import { NonEmptyArray } from 'type-graphql';
import * as AuthResolvers from './Auth';
import * as UploadFileResolver from './Upload';

const CustomAuthResolvers = Object.values(
  AuthResolvers
) as unknown as NonEmptyArray<Function>;

const CustomUploadResolvers = Object.values(
  UploadFileResolver
) as unknown as NonEmptyArray<Function>;

export const customResolvers = [
  ...CustomAuthResolvers,
  ...CustomUploadResolvers,
] as unknown as NonEmptyArray<Function>;
