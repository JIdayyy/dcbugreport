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
    aggregateBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    bug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    bugs: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    createBug: [],
    createManyBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    deleteBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    deleteManyBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    findFirstBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    groupByBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    updateBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    updateManyBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    upsertBug: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  User: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Website: {
    _all: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
  },
  Category: {
    aggregateCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    category: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    createCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    createManyCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    deleteCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    deleteManyCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    findFirstCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    groupByCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    updateCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    updateManyCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    upsertCategory: [Authorized(Role.SUPER_ADMIN, Role.ADMIN)],
    categories: [],
  },
};

export const Resolve = (): void =>
  applyResolversEnhanceMap(resolversEnhanceMap);
