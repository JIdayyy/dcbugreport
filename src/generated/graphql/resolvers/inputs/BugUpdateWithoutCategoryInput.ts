import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutBugInput } from "../inputs/CommentUpdateManyWithoutBugInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBugPriorityFieldUpdateOperationsInput } from "../inputs/EnumBugPriorityFieldUpdateOperationsInput";
import { EnumBugSeverityFieldUpdateOperationsInput } from "../inputs/EnumBugSeverityFieldUpdateOperationsInput";
import { EnumBugStatusFieldUpdateOperationsInput } from "../inputs/EnumBugStatusFieldUpdateOperationsInput";
import { EnumValidationStatusFieldUpdateOperationsInput } from "../inputs/EnumValidationStatusFieldUpdateOperationsInput";
import { FileUpdateManyWithoutBugInput } from "../inputs/FileUpdateManyWithoutBugInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBugInput } from "../inputs/UserUpdateOneRequiredWithoutBugInput";
import { WebsiteUpdateOneRequiredWithoutBugInput } from "../inputs/WebsiteUpdateOneRequiredWithoutBugInput";

@TypeGraphQL.InputType("BugUpdateWithoutCategoryInput", {
  isAbstract: true
})
export class BugUpdateWithoutCategoryInput {
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

  @TypeGraphQL.Field(_type => EnumBugStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumBugStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBugPriorityFieldUpdateOperationsInput, {
    nullable: true
  })
  priority?: EnumBugPriorityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBugSeverityFieldUpdateOperationsInput, {
    nullable: true
  })
  severity?: EnumBugSeverityFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBugInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateOneRequiredWithoutBugInput, {
    nullable: true
  })
  Website?: WebsiteUpdateOneRequiredWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => EnumValidationStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  validation_status?: EnumValidationStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FileUpdateManyWithoutBugInput, {
    nullable: true
  })
  File?: FileUpdateManyWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutBugInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutBugInput | undefined;
}
