import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutApiKeyInput } from "../inputs/WebsiteCreateWithoutApiKeyInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateOrConnectWithoutApiKeyInput", {
  isAbstract: true
})
export class WebsiteCreateOrConnectWithoutApiKeyInput {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutApiKeyInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutApiKeyInput;
}
