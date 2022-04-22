import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutSecret_keyInput } from "../inputs/WebsiteCreateOrConnectWithoutSecret_keyInput";
import { WebsiteCreateWithoutSecret_keyInput } from "../inputs/WebsiteCreateWithoutSecret_keyInput";
import { WebsiteUpdateWithoutSecret_keyInput } from "../inputs/WebsiteUpdateWithoutSecret_keyInput";
import { WebsiteUpsertWithoutSecret_keyInput } from "../inputs/WebsiteUpsertWithoutSecret_keyInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteUpdateOneRequiredWithoutSecret_keyInput", {
  isAbstract: true
})
export class WebsiteUpdateOneRequiredWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutSecret_keyInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutSecret_keyInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpsertWithoutSecret_keyInput, {
    nullable: true
  })
  upsert?: WebsiteUpsertWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutSecret_keyInput, {
    nullable: true
  })
  update?: WebsiteUpdateWithoutSecret_keyInput | undefined;
}
