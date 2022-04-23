import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SecretKeyUpdateOneWithoutApi_keyInput } from "../inputs/SecretKeyUpdateOneWithoutApi_keyInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WebsiteUpdateOneRequiredWithoutApiKeyInput } from "../inputs/WebsiteUpdateOneRequiredWithoutApiKeyInput";

@TypeGraphQL.InputType("ApiKeyUpdateWithoutUserInput", {
  isAbstract: true
})
export class ApiKeyUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateOneRequiredWithoutApiKeyInput, {
    nullable: true
  })
  website?: WebsiteUpdateOneRequiredWithoutApiKeyInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyUpdateOneWithoutApi_keyInput, {
    nullable: true
  })
  secret_key?: SecretKeyUpdateOneWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  secretKeyId?: NullableStringFieldUpdateOperationsInput | undefined;
}
