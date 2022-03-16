import * as TypeGraphQL from "type-graphql";

export enum NotificationTopics {
  NEW_BUG = "NEW_BUG",
  NEW_FEATURE = "NEW_FEATURE",
  NEW_FILE = "NEW_FILE",
  NEW_COMMENT = "NEW_COMMENT",
  NEW_REVIEW = "NEW_REVIEW",
  NEW_REPLY = "NEW_REPLY",
  BUG_CLOSED = "BUG_CLOSED",
  FEATURE_CLOSED = "FEATURE_CLOSED",
  FILE_UPLOADED = "FILE_UPLOADED",
  WEBSITE_ADDED = "WEBSITE_ADDED",
  WEBSITE_REMOVED = "WEBSITE_REMOVED",
  WEBSITE_UPDATED = "WEBSITE_UPDATED",
  NEW_USER = "NEW_USER",
  OTHER = "OTHER"
}
TypeGraphQL.registerEnumType(NotificationTopics, {
  name: "NotificationTopics",
  description: undefined,
});
