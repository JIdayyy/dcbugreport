import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyScalarWhereInput } from "../inputs/ApiKeyScalarWhereInput";
import { ApiKeyUpdateManyMutationInput } from "../inputs/ApiKeyUpdateManyMutationInput";

@TypeGraphQL.InputType("ApiKeyUpdateManyWithWhereWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyUpdateManyWithWhereWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => ApiKeyScalarWhereInput, {
    nullable: false
  })
  where!: ApiKeyScalarWhereInput;

  @TypeGraphQL.Field(_type => ApiKeyUpdateManyMutationInput, {
    nullable: false
  })
  data!: ApiKeyUpdateManyMutationInput;
}
