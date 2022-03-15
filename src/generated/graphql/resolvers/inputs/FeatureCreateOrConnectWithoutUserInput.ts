import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutUserInput } from "../inputs/FeatureCreateWithoutUserInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class FeatureCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutUserInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutUserInput;
}
