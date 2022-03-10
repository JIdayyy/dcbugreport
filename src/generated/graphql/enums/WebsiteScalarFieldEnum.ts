import * as TypeGraphQL from "type-graphql";

export enum WebsiteScalarFieldEnum {
  id = "id",
  name = "name",
  url = "url",
  logo = "logo",
  isPreview = "isPreview",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(WebsiteScalarFieldEnum, {
  name: "WebsiteScalarFieldEnum",
  description: undefined,
});
