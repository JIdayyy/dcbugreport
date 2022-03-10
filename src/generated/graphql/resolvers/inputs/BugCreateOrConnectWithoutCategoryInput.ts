import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutCategoryInput } from "../inputs/BugCreateWithoutCategoryInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateOrConnectWithoutCategoryInput", {
  isAbstract: true
})
export class BugCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: BugCreateWithoutCategoryInput;
}
