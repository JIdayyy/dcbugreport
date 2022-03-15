import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BugUpdateManyWithoutUserInput } from "../inputs/BugUpdateManyWithoutUserInput";
import { CommentUpdateManyWithoutUserInput } from "../inputs/CommentUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FeatureUpdateManyWithoutUserInput } from "../inputs/FeatureUpdateManyWithoutUserInput";
import { FileUpdateManyWithoutUserInput } from "../inputs/FileUpdateManyWithoutUserInput";
import { NotificationUpdateManyWithoutSenderInput } from "../inputs/NotificationUpdateManyWithoutSenderInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateroleInput } from "../inputs/UserUpdateroleInput";

@TypeGraphQL.InputType("UserUpdateWithoutNotificationInput", {
  isAbstract: true
})
export class UserUpdateWithoutNotificationInput {
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

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateroleInput, {
    nullable: true
  })
  role?: UserUpdateroleInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutUserInput, {
    nullable: true
  })
  files?: FileUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateManyWithoutUserInput, {
    nullable: true
  })
  Bug?: BugUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutSenderInput, {
    nullable: true
  })
  notifications_sent?: NotificationUpdateManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutUserInput, {
    nullable: true
  })
  Comment?: CommentUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FeatureUpdateManyWithoutUserInput, {
    nullable: true
  })
  feature?: FeatureUpdateManyWithoutUserInput | undefined;
}
