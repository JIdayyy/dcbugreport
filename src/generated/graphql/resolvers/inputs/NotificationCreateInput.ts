import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreatetopicsInput } from "../inputs/NotificationCreatetopicsInput";
import { UserCreateNestedOneWithoutNotificationInput } from "../inputs/UserCreateNestedOneWithoutNotificationInput";
import { UserCreateNestedOneWithoutNotifications_sentInput } from "../inputs/UserCreateNestedOneWithoutNotifications_sentInput";

@TypeGraphQL.InputType("NotificationCreateInput", {
  isAbstract: true
})
export class NotificationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRead?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutNotificationInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotifications_sentInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutNotifications_sentInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bugId?: string | undefined;

  @TypeGraphQL.Field(_type => NotificationCreatetopicsInput, {
    nullable: true
  })
  topics?: NotificationCreatetopicsInput | undefined;
}
