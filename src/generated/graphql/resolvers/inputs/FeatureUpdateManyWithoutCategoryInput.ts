import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyCategoryInputEnvelope } from "../inputs/FeatureCreateManyCategoryInputEnvelope";
import { FeatureCreateOrConnectWithoutCategoryInput } from "../inputs/FeatureCreateOrConnectWithoutCategoryInput";
import { FeatureCreateWithoutCategoryInput } from "../inputs/FeatureCreateWithoutCategoryInput";
import { FeatureScalarWhereInput } from "../inputs/FeatureScalarWhereInput";
import { FeatureUpdateManyWithWhereWithoutCategoryInput } from "../inputs/FeatureUpdateManyWithWhereWithoutCategoryInput";
import { FeatureUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/FeatureUpdateWithWhereUniqueWithoutCategoryInput";
import { FeatureUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/FeatureUpsertWithWhereUniqueWithoutCategoryInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateManyWithoutCategoryInput", {
  isAbstract: true
})
export class FeatureUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [FeatureCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: FeatureCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: FeatureUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  set?: FeatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FeatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  delete?: FeatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  connect?: FeatureWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: FeatureUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: FeatureUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FeatureScalarWhereInput[] | undefined;
}
