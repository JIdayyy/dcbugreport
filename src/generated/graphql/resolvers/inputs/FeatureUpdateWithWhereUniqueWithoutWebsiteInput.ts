import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureUpdateWithoutWebsiteInput } from "../inputs/FeatureUpdateWithoutWebsiteInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class FeatureUpdateWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutWebsiteInput, {
    nullable: false
  })
  data!: FeatureUpdateWithoutWebsiteInput;
}
