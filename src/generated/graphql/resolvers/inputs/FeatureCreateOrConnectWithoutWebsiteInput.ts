import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutWebsiteInput } from "../inputs/FeatureCreateWithoutWebsiteInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureCreateOrConnectWithoutWebsiteInput", {
  isAbstract: true
})
export class FeatureCreateOrConnectWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: false
  })
  where!: FeatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutWebsiteInput;
}
