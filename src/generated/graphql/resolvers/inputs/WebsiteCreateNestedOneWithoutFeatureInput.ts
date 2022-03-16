import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutFeatureInput } from "../inputs/WebsiteCreateOrConnectWithoutFeatureInput";
import { WebsiteCreateWithoutFeatureInput } from "../inputs/WebsiteCreateWithoutFeatureInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateNestedOneWithoutFeatureInput", {
  isAbstract: true
})
export class WebsiteCreateNestedOneWithoutFeatureInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutFeatureInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutFeatureInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;
}
