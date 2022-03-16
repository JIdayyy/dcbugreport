import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { NotificationTopics } from "../enums/NotificationTopics";

@TypeGraphQL.ObjectType("Notification", {
  isAbstract: true
})
export class Notification {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isRead!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  sender?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bugId?: string | null;

  @TypeGraphQL.Field(_type => [NotificationTopics], {
    nullable: false
  })
  topics!: Array<"NEW_BUG" | "NEW_FEATURE" | "NEW_FILE" | "NEW_COMMENT" | "NEW_REVIEW" | "NEW_REPLY" | "BUG_CLOSED" | "FEATURE_CLOSED" | "FILE_UPLOADED" | "WEBSITE_ADDED" | "WEBSITE_REMOVED" | "WEBSITE_UPDATED" | "NEW_USER" | "OTHER">;
}
