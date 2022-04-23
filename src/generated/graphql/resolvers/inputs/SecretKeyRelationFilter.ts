import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyWhereInput } from "../inputs/SecretKeyWhereInput";

@TypeGraphQL.InputType("SecretKeyRelationFilter", {
  isAbstract: true
})
export class SecretKeyRelationFilter {
  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  is?: SecretKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  isNot?: SecretKeyWhereInput | undefined;
}
