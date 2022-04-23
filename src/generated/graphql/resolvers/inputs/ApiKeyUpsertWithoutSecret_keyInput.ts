import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateWithoutSecret_keyInput } from "../inputs/ApiKeyCreateWithoutSecret_keyInput";
import { ApiKeyUpdateWithoutSecret_keyInput } from "../inputs/ApiKeyUpdateWithoutSecret_keyInput";

@TypeGraphQL.InputType("ApiKeyUpsertWithoutSecret_keyInput", {
  isAbstract: true
})
export class ApiKeyUpsertWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => ApiKeyUpdateWithoutSecret_keyInput, {
    nullable: false
  })
  update!: ApiKeyUpdateWithoutSecret_keyInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutSecret_keyInput, {
    nullable: false
  })
  create!: ApiKeyCreateWithoutSecret_keyInput;
}
