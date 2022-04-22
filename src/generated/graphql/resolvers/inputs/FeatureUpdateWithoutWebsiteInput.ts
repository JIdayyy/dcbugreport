import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryUpdateOneRequiredWithoutFeatureInput } from "../inputs/CategoryUpdateOneRequiredWithoutFeatureInput";
import { CommentUpdateManyWithoutFeatureInput } from "../inputs/CommentUpdateManyWithoutFeatureInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutFeatureInput } from "../inputs/UserUpdateOneWithoutFeatureInput";

@TypeGraphQL.InputType("FeatureUpdateWithoutWebsiteInput", {
  isAbstract: true
})
export class FeatureUpdateWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutFeatureInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutFeatureInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutFeatureInput, {
    nullable: true
  })
  User?: UserUpdateOneWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  widgetsId?: NullableStringFieldUpdateOperationsInput | undefined;
}
