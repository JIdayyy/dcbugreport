import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutFeatureInput } from "../inputs/WebsiteCreateWithoutFeatureInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateOrConnectWithoutFeatureInput", {
  isAbstract: true
})
export class WebsiteCreateOrConnectWithoutFeatureInput {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutFeatureInput;
}
