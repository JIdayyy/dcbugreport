/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from 'type-graphql';
import * as SubscriptionsImports from './Notifications/index';

const SubscriptionResolvers = Object.values(
  SubscriptionsImports
) as unknown as NonEmptyArray<Function>;

export const customSubscriptionsResolvers = [
  ...SubscriptionResolvers,
] as unknown as NonEmptyArray<Function>;
