import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyUpdateWithoutUserInput } from "../inputs/SecretKeyUpdateWithoutUserInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SecretKeyUpdateWithoutUserInput;
}
