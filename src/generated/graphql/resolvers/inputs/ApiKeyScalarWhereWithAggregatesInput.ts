import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ApiKeyScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ApiKeyScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ApiKeyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ApiKeyScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ApiKeyScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  secretKeyId?: StringNullableWithAggregatesFilter | undefined;
}
