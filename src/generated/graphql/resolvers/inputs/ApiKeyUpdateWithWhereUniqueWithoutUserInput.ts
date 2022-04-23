import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyUpdateWithoutUserInput } from "../inputs/ApiKeyUpdateWithoutUserInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ApiKeyUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ApiKeyUpdateWithoutUserInput;
}
