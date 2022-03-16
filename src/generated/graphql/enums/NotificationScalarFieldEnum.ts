import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  isRead = "isRead",
  is_disabled = "is_disabled",
  created_at = "created_at",
  updated_at = "updated_at",
  userId = "userId",
  senderId = "senderId",
  bugId = "bugId",
  topics = "topics"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
