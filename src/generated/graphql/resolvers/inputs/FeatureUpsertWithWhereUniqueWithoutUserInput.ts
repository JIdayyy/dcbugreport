import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutUserInput } from "../inputs/FeatureCreateWithoutUserInput";
import { FeatureUpdateWithoutUserInput } from "../inputs/FeatureUpdateWithoutUserInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class FeatureUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutUserInput, {
    nullable: false
  })
  update!: FeatureUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutUserInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutUserInput;
}
