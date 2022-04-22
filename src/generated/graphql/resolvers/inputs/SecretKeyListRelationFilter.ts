import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyWhereInput } from "../inputs/SecretKeyWhereInput";

@TypeGraphQL.InputType("SecretKeyListRelationFilter", {
  isAbstract: true
})
export class SecretKeyListRelationFilter {
  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  every?: SecretKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  some?: SecretKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  none?: SecretKeyWhereInput | undefined;
}
