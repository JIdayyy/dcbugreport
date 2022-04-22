import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateWithoutUserInput } from "../inputs/ApiKeyCreateWithoutUserInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ApiKeyCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutUserInput, {
    nullable: false
  })
  create!: ApiKeyCreateWithoutUserInput;
}
