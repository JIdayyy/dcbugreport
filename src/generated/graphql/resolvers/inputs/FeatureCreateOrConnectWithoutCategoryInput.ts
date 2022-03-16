import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutCategoryInput } from "../inputs/FeatureCreateWithoutCategoryInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateOrConnectWithoutCategoryInput", {
  isAbstract: true
})
export class FeatureCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutCategoryInput;
}
