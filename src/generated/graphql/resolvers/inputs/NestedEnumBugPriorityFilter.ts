import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugPriority } from "../../enums/BugPriority";

@TypeGraphQL.InputType("NestedEnumBugPriorityFilter", {
  isAbstract: true
})
export class NestedEnumBugPriorityFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBugPriorityFilter, {
    nullable: true
  })
  not?: NestedEnumBugPriorityFilter | undefined;
}
