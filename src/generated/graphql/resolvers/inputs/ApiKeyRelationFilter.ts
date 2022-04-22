import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyWhereInput } from "../inputs/ApiKeyWhereInput";

@TypeGraphQL.InputType("ApiKeyRelationFilter", {
  isAbstract: true
})
export class ApiKeyRelationFilter {
  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  is?: ApiKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  isNot?: ApiKeyWhereInput | undefined;
}
