import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutBugInput } from "../inputs/WebsiteCreateWithoutBugInput";
import { WebsiteUpdateWithoutBugInput } from "../inputs/WebsiteUpdateWithoutBugInput";

@TypeGraphQL.InputType("WebsiteUpsertWithoutBugInput", {
  isAbstract: true
})
export class WebsiteUpsertWithoutBugInput {
  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutBugInput, {
    nullable: false
  })
  update!: WebsiteUpdateWithoutBugInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutBugInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutBugInput;
}
