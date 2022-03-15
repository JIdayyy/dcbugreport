import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutFeatureInput } from "../inputs/WebsiteCreateWithoutFeatureInput";
import { WebsiteUpdateWithoutFeatureInput } from "../inputs/WebsiteUpdateWithoutFeatureInput";

@TypeGraphQL.InputType("WebsiteUpsertWithoutFeatureInput", {
  isAbstract: true
})
export class WebsiteUpsertWithoutFeatureInput {
  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutFeatureInput, {
    nullable: false
  })
  update!: WebsiteUpdateWithoutFeatureInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutFeatureInput;
}
