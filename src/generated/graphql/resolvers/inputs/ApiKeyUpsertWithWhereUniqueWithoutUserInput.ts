import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateWithoutUserInput } from "../inputs/ApiKeyCreateWithoutUserInput";
import { ApiKeyUpdateWithoutUserInput } from "../inputs/ApiKeyUpdateWithoutUserInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ApiKeyUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ApiKeyUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutUserInput, {
    nullable: false
  })
  create!: ApiKeyCreateWithoutUserInput;
}
