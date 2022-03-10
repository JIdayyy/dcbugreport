import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutBugInput } from "../inputs/WebsiteCreateWithoutBugInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateOrConnectWithoutBugInput", {
  isAbstract: true
})
export class WebsiteCreateOrConnectWithoutBugInput {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutBugInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutBugInput;
}
