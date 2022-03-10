import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("WebsiteScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class WebsiteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [WebsiteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: WebsiteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: WebsiteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: WebsiteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  logo?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isPreview?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
