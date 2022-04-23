import * as TypeGraphQL from "type-graphql";

export enum FeatureScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  is_disabled = "is_disabled",
  created_at = "created_at",
  updated_at = "updated_at",
  websiteId = "websiteId",
  categoryId = "categoryId",
  userId = "userId",
  widgetsId = "widgetsId"
}
TypeGraphQL.registerEnumType(FeatureScalarFieldEnum, {
  name: "FeatureScalarFieldEnum",
  description: undefined,
});
