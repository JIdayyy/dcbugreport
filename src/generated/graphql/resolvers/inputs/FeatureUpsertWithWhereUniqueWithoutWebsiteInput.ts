import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutWebsiteInput } from "../inputs/FeatureCreateWithoutWebsiteInput";
import { FeatureUpdateWithoutWebsiteInput } from "../inputs/FeatureUpdateWithoutWebsiteInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpsertWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class FeatureUpsertWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutWebsiteInput, {
    nullable: false
  })
  update!: FeatureUpdateWithoutWebsiteInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutWebsiteInput;
}
