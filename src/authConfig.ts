/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { Role } from '@prisma/client';
import { Authorized } from 'type-graphql';
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from './generated/graphql/enhance';

// TODO  - Change the roles before production

const resolversEnhanceMap: ResolversEnhanceMap = {
  File: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)],
  },
  Bug: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)],
  },
  User: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)],
  },
  Website: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)],
  },
  Category: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN, Role.USER, Role.MANAGER)],
  },
};

export const Resolve = () => applyResolversEnhanceMap(resolversEnhanceMap);
