import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateManyUserInput } from "../inputs/ApiKeyCreateManyUserInput";

@TypeGraphQL.InputType("ApiKeyCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ApiKeyCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ApiKeyCreateManyUserInput], {
    nullable: false
  })
  data!: ApiKeyCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
