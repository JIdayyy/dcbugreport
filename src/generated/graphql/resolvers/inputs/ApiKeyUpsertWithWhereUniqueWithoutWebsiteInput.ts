import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateWithoutWebsiteInput } from "../inputs/ApiKeyCreateWithoutWebsiteInput";
import { ApiKeyUpdateWithoutWebsiteInput } from "../inputs/ApiKeyUpdateWithoutWebsiteInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyUpdateWithoutWebsiteInput, {
    nullable: false
  })
  update!: ApiKeyUpdateWithoutWebsiteInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: ApiKeyCreateWithoutWebsiteInput;
}
