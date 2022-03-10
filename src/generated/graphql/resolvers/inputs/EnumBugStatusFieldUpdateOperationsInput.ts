import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugStatus } from "../../enums/BugStatus";

@TypeGraphQL.InputType("EnumBugStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBugStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BugStatus, {
    nullable: true
  })
  set?: "OPEN" | "IN_PROGRESS" | "CLOSED" | undefined;
}
