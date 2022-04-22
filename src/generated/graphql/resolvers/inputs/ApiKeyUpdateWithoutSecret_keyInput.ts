import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutKeysInput } from "../inputs/UserUpdateOneRequiredWithoutKeysInput";
import { WebsiteUpdateOneRequiredWithoutApiKeyInput } from "../inputs/WebsiteUpdateOneRequiredWithoutApiKeyInput";

@TypeGraphQL.InputType("ApiKeyUpdateWithoutSecret_keyInput", {
  isAbstract: true
})
export class ApiKeyUpdateWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutKeysInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutKeysInput | undefined;

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

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  secretKeyId?: NullableStringFieldUpdateOperationsInput | undefined;
}
