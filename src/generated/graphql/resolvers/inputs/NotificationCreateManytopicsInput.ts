import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationTopics } from "../../enums/NotificationTopics";

@TypeGraphQL.InputType("NotificationCreateManytopicsInput", {
  isAbstract: true
})
export class NotificationCreateManytopicsInput {
  @TypeGraphQL.Field(_type => [NotificationTopics], {
    nullable: false
  })
  set!: Array<"NEW_BUG" | "NEW_FEATURE" | "NEW_FILE" | "NEW_COMMENT" | "NEW_REVIEW" | "NEW_REPLY" | "BUG_CLOSED" | "FEATURE_CLOSED" | "FILE_UPLOADED" | "WEBSITE_ADDED" | "WEBSITE_REMOVED" | "WEBSITE_UPDATED" | "NEW_USER" | "OTHER">;
}
