import * as TypeGraphQL from "type-graphql";

export enum SecretKeyScalarFieldEnum {
  id = "id",
  userId = "userId",
  value = "value",
  websiteId = "websiteId",
  apiKeyId = "apiKeyId",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(SecretKeyScalarFieldEnum, {
  name: "SecretKeyScalarFieldEnum",
  description: undefined,
});
