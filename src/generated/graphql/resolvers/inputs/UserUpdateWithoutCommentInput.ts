import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyUpdateManyWithoutUserInput } from "../inputs/ApiKeyUpdateManyWithoutUserInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BugUpdateManyWithoutUserInput } from "../inputs/BugUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FeatureUpdateManyWithoutUserInput } from "../inputs/FeatureUpdateManyWithoutUserInput";
import { FileUpdateManyWithoutUserInput } from "../inputs/FileUpdateManyWithoutUserInput";
import { NotificationUpdateManyWithoutSenderInput } from "../inputs/NotificationUpdateManyWithoutSenderInput";
import { NotificationUpdateManyWithoutUserInput } from "../inputs/NotificationUpdateManyWithoutUserInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SecretKeyUpdateManyWithoutUserInput } from "../inputs/SecretKeyUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateroleInput } from "../inputs/UserUpdateroleInput";

@TypeGraphQL.InputType("UserUpdateWithoutCommentInput", {
  isAbstract: true
})
export class UserUpdateWithoutCommentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutUserInput, {
    nullable: true
  })
  files?: FileUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateroleInput, {
    nullable: true
  })
  role?: UserUpdateroleInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateManyWithoutUserInput, {
    nullable: true
  })
  Bug?: BugUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput, {
    nullable: true
  })
  Notification?: NotificationUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutSenderInput, {
    nullable: true
  })
  notifications_sent?: NotificationUpdateManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => FeatureUpdateManyWithoutUserInput, {
    nullable: true
  })
  feature?: FeatureUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyUpdateManyWithoutUserInput, {
    nullable: true
  })
  Keys?: ApiKeyUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyUpdateManyWithoutUserInput, {
    nullable: true
  })
  secret_key?: SecretKeyUpdateManyWithoutUserInput | undefined;
}
