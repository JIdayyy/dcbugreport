import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumValidationStatusFilter } from "../inputs/NestedEnumValidationStatusFilter";
import { ValidationStatus } from "../../enums/ValidationStatus";

@TypeGraphQL.InputType("EnumValidationStatusFilter", {
  isAbstract: true
})
export class EnumValidationStatusFilter {
  @TypeGraphQL.Field(_type => ValidationStatus, {
    nullable: true
  })
  equals?: "VALIDATED" | "NOT_VALIDATED" | "PENDING" | undefined;

  @TypeGraphQL.Field(_type => [ValidationStatus], {
    nullable: true
  })
  in?: Array<"VALIDATED" | "NOT_VALIDATED" | "PENDING"> | undefined;

  @TypeGraphQL.Field(_type => [ValidationStatus], {
    nullable: true
  })
  notIn?: Array<"VALIDATED" | "NOT_VALIDATED" | "PENDING"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumValidationStatusFilter, {
    nullable: true
  })
  not?: NestedEnumValidationStatusFilter | undefined;
}
