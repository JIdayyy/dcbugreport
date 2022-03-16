import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureUpdateWithoutUserInput } from "../inputs/FeatureUpdateWithoutUserInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class FeatureUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutUserInput, {
    nullable: false
  })
  data!: FeatureUpdateWithoutUserInput;
}
