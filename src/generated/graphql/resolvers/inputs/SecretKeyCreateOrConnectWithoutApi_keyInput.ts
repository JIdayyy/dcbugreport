import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateWithoutApi_keyInput } from "../inputs/SecretKeyCreateWithoutApi_keyInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyCreateOrConnectWithoutApi_keyInput", {
  isAbstract: true
})
export class SecretKeyCreateOrConnectWithoutApi_keyInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutApi_keyInput, {
    nullable: false
  })
  create!: SecretKeyCreateWithoutApi_keyInput;
}
