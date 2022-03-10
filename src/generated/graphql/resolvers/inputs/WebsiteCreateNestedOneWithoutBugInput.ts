import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutBugInput } from "../inputs/WebsiteCreateOrConnectWithoutBugInput";
import { WebsiteCreateWithoutBugInput } from "../inputs/WebsiteCreateWithoutBugInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateNestedOneWithoutBugInput", {
  isAbstract: true
})
export class WebsiteCreateNestedOneWithoutBugInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutBugInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutBugInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;
}
