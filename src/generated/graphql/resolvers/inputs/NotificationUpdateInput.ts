import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NotificationUpdatetopicsInput } from "../inputs/NotificationUpdatetopicsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNotificationInput } from "../inputs/UserUpdateOneRequiredWithoutNotificationInput";
import { UserUpdateOneRequiredWithoutNotifications_sentInput } from "../inputs/UserUpdateOneRequiredWithoutNotifications_sentInput";

@TypeGraphQL.InputType("NotificationUpdateInput", {
  isAbstract: true
})
export class NotificationUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_disabled?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bugId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdatetopicsInput, {
    nullable: true
  })
  topics?: NotificationUpdatetopicsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNotificationInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNotifications_sentInput, {
    nullable: true
  })
  sender?: UserUpdateOneRequiredWithoutNotifications_sentInput | undefined;
}
