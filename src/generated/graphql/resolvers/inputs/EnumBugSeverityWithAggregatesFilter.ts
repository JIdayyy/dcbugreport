import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBugSeverityFilter } from "../inputs/NestedEnumBugSeverityFilter";
import { NestedEnumBugSeverityWithAggregatesFilter } from "../inputs/NestedEnumBugSeverityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BugSeverity } from "../../enums/BugSeverity";

@TypeGraphQL.InputType("EnumBugSeverityWithAggregatesFilter", {
  isAbstract: true
})
export class EnumBugSeverityWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BugSeverity, {
    nullable: true
  })
  equals?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | undefined;

  @TypeGraphQL.Field(_type => [BugSeverity], {
    nullable: true
  })
  in?: Array<"CRITICAL" | "HIGH" | "MEDIUM" | "LOW"> | undefined;

  @TypeGraphQL.Field(_type => [BugSeverity], {
    nullable: true
  })
  notIn?: Array<"CRITICAL" | "HIGH" | "MEDIUM" | "LOW"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugSeverityWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBugSeverityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugSeverityFilter, {
    nullable: true
  })
  _min?: NestedEnumBugSeverityFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugSeverityFilter, {
    nullable: true
  })
  _max?: NestedEnumBugSeverityFilter | undefined;
}
