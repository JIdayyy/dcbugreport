import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumValidationStatusFilter } from "../inputs/NestedEnumValidationStatusFilter";
import { NestedEnumValidationStatusWithAggregatesFilter } from "../inputs/NestedEnumValidationStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ValidationStatus } from "../../enums/ValidationStatus";

@TypeGraphQL.InputType("EnumValidationStatusWithAggregatesFilter", {
  isAbstract: true
})
export class EnumValidationStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumValidationStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumValidationStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumValidationStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumValidationStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumValidationStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumValidationStatusFilter | undefined;
}
