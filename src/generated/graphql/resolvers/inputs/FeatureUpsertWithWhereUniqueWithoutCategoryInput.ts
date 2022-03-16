import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutCategoryInput } from "../inputs/FeatureCreateWithoutCategoryInput";
import { FeatureUpdateWithoutCategoryInput } from "../inputs/FeatureUpdateWithoutCategoryInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpsertWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class FeatureUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: FeatureUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutCategoryInput;
}
