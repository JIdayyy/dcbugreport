import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBugStatusFilter } from "../inputs/NestedEnumBugStatusFilter";
import { NestedEnumBugStatusWithAggregatesFilter } from "../inputs/NestedEnumBugStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BugStatus } from "../../enums/BugStatus";

@TypeGraphQL.InputType("EnumBugStatusWithAggregatesFilter", {
  isAbstract: true
})
export class EnumBugStatusWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BugStatus, {
    nullable: true
  })
  equals?: "OPEN" | "IN_PROGRESS" | "CLOSED" | undefined;

  @TypeGraphQL.Field(_type => [BugStatus], {
    nullable: true
  })
  in?: Array<"OPEN" | "IN_PROGRESS" | "CLOSED"> | undefined;

  @TypeGraphQL.Field(_type => [BugStatus], {
    nullable: true
  })
  notIn?: Array<"OPEN" | "IN_PROGRESS" | "CLOSED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBugStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumBugStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumBugStatusFilter | undefined;
}
