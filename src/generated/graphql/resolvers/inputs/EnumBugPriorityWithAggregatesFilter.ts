import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBugPriorityFilter } from "../inputs/NestedEnumBugPriorityFilter";
import { NestedEnumBugPriorityWithAggregatesFilter } from "../inputs/NestedEnumBugPriorityWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BugPriority } from "../../enums/BugPriority";

@TypeGraphQL.InputType("EnumBugPriorityWithAggregatesFilter", {
  isAbstract: true
})
export class EnumBugPriorityWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BugPriority, {
    nullable: true
  })
  equals?: "LOW" | "MEDIUM" | "HIGH" | undefined;

  @TypeGraphQL.Field(_type => [BugPriority], {
    nullable: true
  })
  in?: Array<"LOW" | "MEDIUM" | "HIGH"> | undefined;

  @TypeGraphQL.Field(_type => [BugPriority], {
    nullable: true
  })
  notIn?: Array<"LOW" | "MEDIUM" | "HIGH"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugPriorityWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBugPriorityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugPriorityFilter, {
    nullable: true
  })
  _min?: NestedEnumBugPriorityFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBugPriorityFilter, {
    nullable: true
  })
  _max?: NestedEnumBugPriorityFilter | undefined;
}
