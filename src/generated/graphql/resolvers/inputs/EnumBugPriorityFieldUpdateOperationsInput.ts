import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugPriority } from "../../enums/BugPriority";

@TypeGraphQL.InputType("EnumBugPriorityFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBugPriorityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BugPriority, {
    nullable: true
  })
  set?: "LOW" | "MEDIUM" | "HIGH" | undefined;
}
