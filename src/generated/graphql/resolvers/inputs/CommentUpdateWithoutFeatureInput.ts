import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugUpdateOneWithoutCommentsInput } from "../inputs/BugUpdateOneWithoutCommentsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentInput } from "../inputs/UserUpdateOneRequiredWithoutCommentInput";

@TypeGraphQL.InputType("CommentUpdateWithoutFeatureInput", {
  isAbstract: true
})
export class CommentUpdateWithoutFeatureInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  fileId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  Bug?: BugUpdateOneWithoutCommentsInput | undefined;
}
