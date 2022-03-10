import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutBugInput } from "../inputs/WebsiteCreateOrConnectWithoutBugInput";
import { WebsiteCreateWithoutBugInput } from "../inputs/WebsiteCreateWithoutBugInput";
import { WebsiteUpdateWithoutBugInput } from "../inputs/WebsiteUpdateWithoutBugInput";
import { WebsiteUpsertWithoutBugInput } from "../inputs/WebsiteUpsertWithoutBugInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteUpdateOneWithoutBugInput", {
  isAbstract: true
})
export class WebsiteUpdateOneWithoutBugInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutBugInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutBugInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpsertWithoutBugInput, {
    nullable: true
  })
  upsert?: WebsiteUpsertWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutBugInput, {
    nullable: true
  })
  update?: WebsiteUpdateWithoutBugInput | undefined;
}
