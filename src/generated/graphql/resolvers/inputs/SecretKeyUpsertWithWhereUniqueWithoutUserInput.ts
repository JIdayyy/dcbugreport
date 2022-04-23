import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateWithoutUserInput } from "../inputs/SecretKeyCreateWithoutUserInput";
import { SecretKeyUpdateWithoutUserInput } from "../inputs/SecretKeyUpdateWithoutUserInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SecretKeyUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutUserInput, {
    nullable: false
  })
  create!: SecretKeyCreateWithoutUserInput;
}
