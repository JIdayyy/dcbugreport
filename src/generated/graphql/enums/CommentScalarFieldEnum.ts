import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  text = "text",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId",
  featureId = "featureId",
  bugId = "bugId"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
