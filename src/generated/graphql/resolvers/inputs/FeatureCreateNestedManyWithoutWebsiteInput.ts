import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyWebsiteInputEnvelope } from "../inputs/FeatureCreateManyWebsiteInputEnvelope";
import { FeatureCreateOrConnectWithoutWebsiteInput } from "../inputs/FeatureCreateOrConnectWithoutWebsiteInput";
import { FeatureCreateWithoutWebsiteInput } from "../inputs/FeatureCreateWithoutWebsiteInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateNestedManyWithoutWebsiteInput", {
  isAbstract: true
})
export class FeatureCreateNestedManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [FeatureCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: FeatureCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: FeatureCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereUniqueInput], {
    nullable: true
  })
  connect?: FeatureWhereUniqueInput[] | undefined;
}
