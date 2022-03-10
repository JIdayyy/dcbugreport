import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutBugInput } from "../inputs/CategoryCreateWithoutBugInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutBugInput", {
  isAbstract: true
})
export class CategoryCreateOrConnectWithoutBugInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutBugInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutBugInput;
}
