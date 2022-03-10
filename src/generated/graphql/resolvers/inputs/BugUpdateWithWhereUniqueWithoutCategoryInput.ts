import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugUpdateWithoutCategoryInput } from "../inputs/BugUpdateWithoutCategoryInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class BugUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: BugUpdateWithoutCategoryInput;
}
