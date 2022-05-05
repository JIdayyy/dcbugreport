/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLRequestContext } from 'apollo-server-core';

const cacheConfig = (
  requestContext: GraphQLRequestContext<Record<string, any>>
): boolean => {
  if (!requestContext.context.user) {
    return false;
  }
  if (
    requestContext.operationName === 'GetAllBugsBy' ||
    requestContext.operationName === 'GetAllComments' ||
    requestContext.operationName === 'GetAllFilesByBug' ||
    requestContext.operationName === 'GetAllFilesByComment' ||
    requestContext.operationName === 'GetAllNotifications'
  ) {
    return false;
  }
  return true;
};

export default cacheConfig;
