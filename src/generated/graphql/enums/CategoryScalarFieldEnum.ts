import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  is_disabled = "is_disabled",
  created_at = "created_at",
  updated_at = "updated_at",
  backgroundColor = "backgroundColor",
  icon = "icon"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
