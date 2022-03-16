import * as TypeGraphQL from "type-graphql";

export enum BugScalarFieldEnum {
  id = "id",
  title = "title",
  number = "number",
  description = "description",
  status = "status",
  priority = "priority",
  severity = "severity",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId",
  websiteId = "websiteId",
  validation_status = "validation_status",
  categoryId = "categoryId"
}
TypeGraphQL.registerEnumType(BugScalarFieldEnum, {
  name: "BugScalarFieldEnum",
  description: undefined,
});
