import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugSeverity } from "../../enums/BugSeverity";

@TypeGraphQL.InputType("EnumBugSeverityFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBugSeverityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BugSeverity, {
    nullable: true
  })
  set?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | undefined;
}
