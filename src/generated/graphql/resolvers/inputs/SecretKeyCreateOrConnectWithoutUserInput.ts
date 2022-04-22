import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateWithoutUserInput } from "../inputs/SecretKeyCreateWithoutUserInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutUserInput, {
    nullable: false
  })
  create!: SecretKeyCreateWithoutUserInput;
}
