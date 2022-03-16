import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutCommentsInput } from "../inputs/FeatureCreateWithoutCommentsInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class FeatureCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutCommentsInput;
}
