import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateWithoutSecret_keyInput } from "../inputs/ApiKeyCreateWithoutSecret_keyInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyCreateOrConnectWithoutSecret_keyInput", {
  isAbstract: true
})
export class ApiKeyCreateOrConnectWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutSecret_keyInput, {
    nullable: false
  })
  create!: ApiKeyCreateWithoutSecret_keyInput;
}
