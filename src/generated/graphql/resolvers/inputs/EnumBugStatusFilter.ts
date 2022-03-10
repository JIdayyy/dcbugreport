import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBugStatusFilter } from "../inputs/NestedEnumBugStatusFilter";
import { BugStatus } from "../../enums/BugStatus";

@TypeGraphQL.InputType("EnumBugStatusFilter", {
  isAbstract: true
})
export class EnumBugStatusFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBugStatusFilter, {
    nullable: true
  })
  not?: NestedEnumBugStatusFilter | undefined;
}
