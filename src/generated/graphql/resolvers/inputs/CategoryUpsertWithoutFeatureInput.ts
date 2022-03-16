import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutFeatureInput } from "../inputs/CategoryCreateWithoutFeatureInput";
import { CategoryUpdateWithoutFeatureInput } from "../inputs/CategoryUpdateWithoutFeatureInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutFeatureInput", {
  isAbstract: true
})
export class CategoryUpsertWithoutFeatureInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutFeatureInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutFeatureInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutFeatureInput;
}
