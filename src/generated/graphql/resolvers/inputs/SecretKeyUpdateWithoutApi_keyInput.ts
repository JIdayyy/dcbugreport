import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSecret_keyInput } from "../inputs/UserUpdateOneRequiredWithoutSecret_keyInput";
import { WebsiteUpdateOneRequiredWithoutSecret_keyInput } from "../inputs/WebsiteUpdateOneRequiredWithoutSecret_keyInput";

@TypeGraphQL.InputType("SecretKeyUpdateWithoutApi_keyInput", {
  isAbstract: true
})
export class SecretKeyUpdateWithoutApi_keyInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSecret_keyInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  value?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateOneRequiredWithoutSecret_keyInput, {
    nullable: true
  })
  website?: WebsiteUpdateOneRequiredWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
