import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateWithoutWebsiteInput } from "../inputs/ApiKeyCreateWithoutWebsiteInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyCreateOrConnectWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyCreateOrConnectWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: ApiKeyCreateWithoutWebsiteInput;
}
