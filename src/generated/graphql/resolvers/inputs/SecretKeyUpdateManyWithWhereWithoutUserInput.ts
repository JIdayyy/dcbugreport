import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyScalarWhereInput } from "../inputs/SecretKeyScalarWhereInput";
import { SecretKeyUpdateManyMutationInput } from "../inputs/SecretKeyUpdateManyMutationInput";

@TypeGraphQL.InputType("SecretKeyUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SecretKeyScalarWhereInput, {
    nullable: false
  })
  where!: SecretKeyScalarWhereInput;

  @TypeGraphQL.Field(_type => SecretKeyUpdateManyMutationInput, {
    nullable: false
  })
  data!: SecretKeyUpdateManyMutationInput;
}
