import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateManyUserInput } from "../inputs/SecretKeyCreateManyUserInput";

@TypeGraphQL.InputType("SecretKeyCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SecretKeyCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SecretKeyCreateManyUserInput], {
    nullable: false
  })
  data!: SecretKeyCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
