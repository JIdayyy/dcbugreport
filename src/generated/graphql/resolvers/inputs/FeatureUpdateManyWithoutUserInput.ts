import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyUserInputEnvelope } from "../inputs/FeatureCreateManyUserInputEnvelope";
import { FeatureCreateOrConnectWithoutUserInput } from "../inputs/FeatureCreateOrConnectWithoutUserInput";
import { FeatureCreateWithoutUserInput } from "../inputs/FeatureCreateWithoutUserInput";
import { FeatureScalarWhereInput } from "../inputs/FeatureScalarWhereInput";
import { FeatureUpdateManyWithWhereWithoutUserInput } from "../inputs/FeatureUpdateManyWithWhereWithoutUserInput";
import { FeatureUpdateWithWhereUniqueWithoutUserInput } from "../inputs/FeatureUpdateWithWhereUniqueWithoutUserInput";
import { FeatureUpsertWithWhereUniqueWithoutUserInput } from "../inputs/FeatureUpsertWithWhereUniqueWithoutUserInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class FeatureUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FeatureCreateWithoutUserInput], {
    nullable: true
  })
  create?: FeatureCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: FeatureUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FeatureUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: FeatureUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: FeatureUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FeatureScalarWhereInput[] | undefined;
}
