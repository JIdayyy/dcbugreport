import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureUpdateWithoutCategoryInput } from "../inputs/FeatureUpdateWithoutCategoryInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class FeatureUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: FeatureUpdateWithoutCategoryInput;
}
