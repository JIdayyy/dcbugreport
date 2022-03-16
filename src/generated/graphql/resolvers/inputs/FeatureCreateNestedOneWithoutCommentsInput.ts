import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateOrConnectWithoutCommentsInput } from "../inputs/FeatureCreateOrConnectWithoutCommentsInput";
import { FeatureCreateWithoutCommentsInput } from "../inputs/FeatureCreateWithoutCommentsInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class FeatureCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => FeatureCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: FeatureCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: true
  })
  connect?: FeatureWhereUniqueInput | undefined;
}
