import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugSeverity } from "../../enums/BugSeverity";

@TypeGraphQL.InputType("NestedEnumBugSeverityFilter", {
  isAbstract: true
})
export class NestedEnumBugSeverityFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBugSeverityFilter, {
    nullable: true
  })
  not?: NestedEnumBugSeverityFilter | undefined;
}
