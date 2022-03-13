import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBugPriorityWithAggregatesFilter } from "../inputs/EnumBugPriorityWithAggregatesFilter";
import { EnumBugSeverityWithAggregatesFilter } from "../inputs/EnumBugSeverityWithAggregatesFilter";
import { EnumBugStatusWithAggregatesFilter } from "../inputs/EnumBugStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BugScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BugScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BugScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BugScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BugScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BugScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  number?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumBugStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugPriorityWithAggregatesFilter, {
    nullable: true
  })
  priority?: EnumBugPriorityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugSeverityWithAggregatesFilter, {
    nullable: true
  })
  severity?: EnumBugSeverityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  websiteId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  categoryId?: StringNullableWithAggregatesFilter | undefined;
}
