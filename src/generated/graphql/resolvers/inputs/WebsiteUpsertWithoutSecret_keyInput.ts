import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateWithoutSecret_keyInput } from "../inputs/WebsiteCreateWithoutSecret_keyInput";
import { WebsiteUpdateWithoutSecret_keyInput } from "../inputs/WebsiteUpdateWithoutSecret_keyInput";

@TypeGraphQL.InputType("WebsiteUpsertWithoutSecret_keyInput", {
  isAbstract: true
})
export class WebsiteUpsertWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutSecret_keyInput, {
    nullable: false
  })
  update!: WebsiteUpdateWithoutSecret_keyInput;

  @TypeGraphQL.Field(_type => WebsiteCreateWithoutSecret_keyInput, {
    nullable: false
  })
  create!: WebsiteCreateWithoutSecret_keyInput;
}
