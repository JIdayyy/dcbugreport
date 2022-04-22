import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SecretKeyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SecretKeyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SecretKeyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SecretKeyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SecretKeyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  value?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  websiteId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  apiKeyId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
