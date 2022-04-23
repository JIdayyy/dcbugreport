import * as TypeGraphQL from "type-graphql";

export enum ApiKeyScalarFieldEnum {
  id = "id",
  userId = "userId",
  value = "value",
  websiteId = "websiteId",
  created_at = "created_at",
  updated_at = "updated_at",
  secretKeyId = "secretKeyId"
}
TypeGraphQL.registerEnumType(ApiKeyScalarFieldEnum, {
  name: "ApiKeyScalarFieldEnum",
  description: undefined,
});
