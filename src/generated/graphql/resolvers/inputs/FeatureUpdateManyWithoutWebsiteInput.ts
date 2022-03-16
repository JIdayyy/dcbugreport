import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyWebsiteInputEnvelope } from "../inputs/FeatureCreateManyWebsiteInputEnvelope";
import { FeatureCreateOrConnectWithoutWebsiteInput } from "../inputs/FeatureCreateOrConnectWithoutWebsiteInput";
import { FeatureCreateWithoutWebsiteInput } from "../inputs/FeatureCreateWithoutWebsiteInput";
import { FeatureScalarWhereInput } from "../inputs/FeatureScalarWhereInput";
import { FeatureUpdateManyWithWhereWithoutWebsiteInput } from "../inputs/FeatureUpdateManyWithWhereWithoutWebsiteInput";
import { FeatureUpdateWithWhereUniqueWithoutWebsiteInput } from "../inputs/FeatureUpdateWithWhereUniqueWithoutWebsiteInput";
import { FeatureUpsertWithWhereUniqueWithoutWebsiteInput } from "../inputs/FeatureUpsertWithWhereUniqueWithoutWebsiteInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateManyWithoutWebsiteInput", {
  isAbstract: true
})
export class FeatureUpdateManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [FeatureCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: FeatureCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpsertWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  upsert?: FeatureUpsertWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureCreateManyWebsiteInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FeatureUpdateWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  update?: FeatureUpdateWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureUpdateManyWithWhereWithoutWebsiteInput], {
    nullable: true
  })
  updateMany?: FeatureUpdateManyWithWhereWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FeatureScalarWhereInput[] | undefined;
}
