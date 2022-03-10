import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutUserInput } from "../inputs/BugCreateWithoutUserInput";
import { BugUpdateWithoutUserInput } from "../inputs/BugUpdateWithoutUserInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BugUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BugUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutUserInput, {
    nullable: false
  })
  create!: BugCreateWithoutUserInput;
}
