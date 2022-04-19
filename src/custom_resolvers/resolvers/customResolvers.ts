/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as AuthResolvers from './Authentication';
import * as UploadFileResolver from '../Upload';
import * as BugResolvers from './Bug';
import * as WidgetResolvers from './Widget';

const CustomWidgetResolvers = Object.values(
  WidgetResolvers
) as unknown as NonEmptyArray<Function>;

const CustomAuthResolvers = Object.values(
  AuthResolvers
) as unknown as NonEmptyArray<Function>;

const CustomBugResolvers = Object.values(
  BugResolvers
) as unknown as NonEmptyArray<Function>;

const CustomUploadResolvers = Object.values(
  UploadFileResolver
) as unknown as NonEmptyArray<Function>;

export const customResolvers = [
  ...CustomBugResolvers,
  ...CustomAuthResolvers,
  ...CustomUploadResolvers,
  ...CustomWidgetResolvers,
] as unknown as NonEmptyArray<Function>;
