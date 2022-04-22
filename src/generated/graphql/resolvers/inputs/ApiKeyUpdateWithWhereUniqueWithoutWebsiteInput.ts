import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyUpdateWithoutWebsiteInput } from "../inputs/ApiKeyUpdateWithoutWebsiteInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyUpdateWithoutWebsiteInput, {
    nullable: false
  })
  data!: ApiKeyUpdateWithoutWebsiteInput;
}
