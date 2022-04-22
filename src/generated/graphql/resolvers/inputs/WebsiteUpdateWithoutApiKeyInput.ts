import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BugUpdateManyWithoutWebsiteInput } from "../inputs/BugUpdateManyWithoutWebsiteInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FeatureUpdateManyWithoutWebsiteInput } from "../inputs/FeatureUpdateManyWithoutWebsiteInput";
import { SecretKeyUpdateManyWithoutWebsiteInput } from "../inputs/SecretKeyUpdateManyWithoutWebsiteInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("WebsiteUpdateWithoutApiKeyInput", {
  isAbstract: true
})
export class WebsiteUpdateWithoutApiKeyInput {
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
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  logo?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isPreview?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateManyWithoutWebsiteInput, {
    nullable: true
  })
  Bug?: BugUpdateManyWithoutWebsiteInput | undefined;

  @TypeGraphQL.Field(_type => FeatureUpdateManyWithoutWebsiteInput, {
    nullable: true
  })
  Feature?: FeatureUpdateManyWithoutWebsiteInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyUpdateManyWithoutWebsiteInput, {
    nullable: true
  })
  secret_key?: SecretKeyUpdateManyWithoutWebsiteInput | undefined;
}
