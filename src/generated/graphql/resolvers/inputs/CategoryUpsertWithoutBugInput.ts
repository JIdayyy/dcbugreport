import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutBugInput } from "../inputs/CategoryCreateWithoutBugInput";
import { CategoryUpdateWithoutBugInput } from "../inputs/CategoryUpdateWithoutBugInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutBugInput", {
  isAbstract: true
})
export class CategoryUpsertWithoutBugInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutBugInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutBugInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutBugInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutBugInput;
}
