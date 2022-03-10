import * as TypeGraphQL from "type-graphql";

export enum BugScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  status = "status",
  priority = "priority",
  severity = "severity",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId",
  websiteId = "websiteId"
}
TypeGraphQL.registerEnumType(BugScalarFieldEnum, {
  name: "BugScalarFieldEnum",
  description: undefined,
});
