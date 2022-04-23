import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutApiKeyInput } from "../inputs/WebsiteCreateOrConnectWithoutApiKeyInput";
import { WebsiteCreateWithoutApiKeyInput } from "../inputs/WebsiteCreateWithoutApiKeyInput";
import { WebsiteUpdateWithoutApiKeyInput } from "../inputs/WebsiteUpdateWithoutApiKeyInput";
import { WebsiteUpsertWithoutApiKeyInput } from "../inputs/WebsiteUpsertWithoutApiKeyInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteUpdateOneRequiredWithoutApiKeyInput", {
  isAbstract: true
})
export class WebsiteUpdateOneRequiredWithoutApiKeyInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutApiKeyInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutApiKeyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutApiKeyInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutApiKeyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpsertWithoutApiKeyInput, {
    nullable: true
  })
  upsert?: WebsiteUpsertWithoutApiKeyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutApiKeyInput, {
    nullable: true
  })
  update?: WebsiteUpdateWithoutApiKeyInput | undefined;
}
