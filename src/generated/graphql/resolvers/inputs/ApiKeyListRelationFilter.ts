import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyWhereInput } from "../inputs/ApiKeyWhereInput";

@TypeGraphQL.InputType("ApiKeyListRelationFilter", {
  isAbstract: true
})
export class ApiKeyListRelationFilter {
  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  every?: ApiKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  some?: ApiKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  none?: ApiKeyWhereInput | undefined;
}
