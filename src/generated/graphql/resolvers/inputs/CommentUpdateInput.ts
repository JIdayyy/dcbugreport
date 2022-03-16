import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugUpdateOneWithoutCommentsInput } from "../inputs/BugUpdateOneWithoutCommentsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FeatureUpdateOneWithoutCommentsInput } from "../inputs/FeatureUpdateOneWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentInput } from "../inputs/UserUpdateOneRequiredWithoutCommentInput";

@TypeGraphQL.InputType("CommentUpdateInput", {
  isAbstract: true
})
export class CommentUpdateInput {
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

  @TypeGraphQL.Field(_type => FeatureUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  Feature?: FeatureUpdateOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateOneWithoutCommentsInput, {
    nullable: true
  })
  Bug?: BugUpdateOneWithoutCommentsInput | undefined;
}
