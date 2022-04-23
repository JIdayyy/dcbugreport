import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateWithoutApi_keyInput } from "../inputs/SecretKeyCreateWithoutApi_keyInput";
import { SecretKeyUpdateWithoutApi_keyInput } from "../inputs/SecretKeyUpdateWithoutApi_keyInput";

@TypeGraphQL.InputType("SecretKeyUpsertWithoutApi_keyInput", {
  isAbstract: true
})
export class SecretKeyUpsertWithoutApi_keyInput {
  @TypeGraphQL.Field(_type => SecretKeyUpdateWithoutApi_keyInput, {
    nullable: false
  })
  update!: SecretKeyUpdateWithoutApi_keyInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutApi_keyInput, {
    nullable: false
  })
  create!: SecretKeyCreateWithoutApi_keyInput;
}
