import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutSecret_keyInput } from "../inputs/WebsiteCreateWithoutSecret_keyInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteCreateOrConnectWithoutSecret_keyInput", {
  isAbstract: true
})
export class WebsiteCreateOrConnectWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutSecret_keyInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutSecret_keyInput;
}
