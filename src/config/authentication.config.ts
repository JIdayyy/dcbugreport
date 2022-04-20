import { Role } from '@prisma/client';
import { Authorized } from 'type-graphql';
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from '../generated/graphql/enhance';

// TODO  - Change the roles before production

const resolversEnhanceMap: ResolversEnhanceMap = {
  File: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Comment: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Feature: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Notification: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Bug: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  User: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Website: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Category: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
};

export const Resolve = (): void =>
  applyResolversEnhanceMap(resolversEnhanceMap);
