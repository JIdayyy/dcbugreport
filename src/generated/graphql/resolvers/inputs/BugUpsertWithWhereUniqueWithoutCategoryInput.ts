import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutCategoryInput } from "../inputs/BugCreateWithoutCategoryInput";
import { BugUpdateWithoutCategoryInput } from "../inputs/BugUpdateWithoutCategoryInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpsertWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class BugUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: BugUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: BugCreateWithoutCategoryInput;
}
