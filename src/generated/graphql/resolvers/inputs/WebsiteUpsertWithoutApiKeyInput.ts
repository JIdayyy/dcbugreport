import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutApiKeyInput } from "../inputs/WebsiteCreateWithoutApiKeyInput";
import { WebsiteUpdateWithoutApiKeyInput } from "../inputs/WebsiteUpdateWithoutApiKeyInput";

@TypeGraphQL.InputType("WebsiteUpsertWithoutApiKeyInput", {
  isAbstract: true
})
export class WebsiteUpsertWithoutApiKeyInput {
  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutApiKeyInput, {
    nullable: false
  })
  update!: WebsiteUpdateWithoutApiKeyInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutApiKeyInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutApiKeyInput;
}
