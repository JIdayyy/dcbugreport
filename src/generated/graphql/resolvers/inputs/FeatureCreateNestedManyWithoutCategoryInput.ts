import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyCategoryInputEnvelope } from "../inputs/FeatureCreateManyCategoryInputEnvelope";
import { FeatureCreateOrConnectWithoutCategoryInput } from "../inputs/FeatureCreateOrConnectWithoutCategoryInput";
import { FeatureCreateWithoutCategoryInput } from "../inputs/FeatureCreateWithoutCategoryInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateNestedManyWithoutCategoryInput", {
  isAbstract: true
})
export class FeatureCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [FeatureCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: FeatureCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  connect?: FeatureWhereUniqueInput[] | undefined;
}
