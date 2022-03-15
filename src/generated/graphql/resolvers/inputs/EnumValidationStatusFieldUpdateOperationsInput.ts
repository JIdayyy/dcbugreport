import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ValidationStatus } from "../../enums/ValidationStatus";

@TypeGraphQL.InputType("EnumValidationStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumValidationStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ValidationStatus, {
    nullable: true
  })
  set?: "VALIDATED" | "NOT_VALIDATED" | "PENDING" | undefined;
}
