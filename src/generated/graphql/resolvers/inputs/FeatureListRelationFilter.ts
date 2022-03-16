import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureWhereInput } from "../inputs/FeatureWhereInput";

@TypeGraphQL.InputType("FeatureListRelationFilter", {
  isAbstract: true
})
export class FeatureListRelationFilter {
  @TypeGraphQL.Field(_type => FeatureWhereInput, {
    nullable: true
  })
  every?: FeatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => FeatureWhereInput, {
    nullable: true
  })
  some?: FeatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => FeatureWhereInput, {
    nullable: true
  })
  none?: FeatureWhereInput | undefined;
}
