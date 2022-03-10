import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutUserInput } from "../inputs/BugCreateWithoutUserInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class BugCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutUserInput, {
    nullable: false
  })
  create!: BugCreateWithoutUserInput;
}
