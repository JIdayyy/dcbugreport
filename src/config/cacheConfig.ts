/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLRequestContext } from 'apollo-server-core';

const cacheConfig = (
  requestContext: GraphQLRequestContext<Record<string, any>>
): boolean => {
  if (!requestContext.context.user) {
    return false;
  }
  console.log(requestContext.operationName);
  if (
    requestContext.operationName === 'GetAllBugsBy' ||
    requestContext.operationName === 'GetAllWebSites' ||
    requestContext.operationName === 'GetAllComments' ||
    requestContext.operationName === 'GetAllFilesByBug' ||
    requestContext.operationName === 'GetAllFilesByComment' ||
    requestContext.operationName === 'GetAllNotifications' ||
    requestContext.operationName === 'GetAllCategories'
  ) {
    return false;
  }
  return true;
};

export default cacheConfig;
