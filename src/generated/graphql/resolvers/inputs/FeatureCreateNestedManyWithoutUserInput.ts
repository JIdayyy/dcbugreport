import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyUserInputEnvelope } from "../inputs/FeatureCreateManyUserInputEnvelope";
import { FeatureCreateOrConnectWithoutUserInput } from "../inputs/FeatureCreateOrConnectWithoutUserInput";
import { FeatureCreateWithoutUserInput } from "../inputs/FeatureCreateWithoutUserInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class FeatureCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FeatureCreateWithoutUserInput], {
    nullable: true
  })
  create?: FeatureCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  connect?: FeatureWhereUniqueInput[] | undefined;
}
