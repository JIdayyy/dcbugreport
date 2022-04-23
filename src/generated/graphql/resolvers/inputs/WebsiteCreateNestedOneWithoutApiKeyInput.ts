import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutApiKeyInput } from "../inputs/WebsiteCreateOrConnectWithoutApiKeyInput";
import { WebsiteCreateWithoutApiKeyInput } from "../inputs/WebsiteCreateWithoutApiKeyInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateNestedOneWithoutApiKeyInput", {
  isAbstract: true
})
export class WebsiteCreateNestedOneWithoutApiKeyInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutApiKeyInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutApiKeyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutApiKeyInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutApiKeyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;
}
