import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugUpdateWithoutUserInput } from "../inputs/BugUpdateWithoutUserInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BugUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BugUpdateWithoutUserInput;
}
