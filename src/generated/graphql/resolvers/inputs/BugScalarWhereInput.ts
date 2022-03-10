import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBugPriorityFilter } from "../inputs/EnumBugPriorityFilter";
import { EnumBugSeverityFilter } from "../inputs/EnumBugSeverityFilter";
import { EnumBugStatusFilter } from "../inputs/EnumBugStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BugScalarWhereInput", {
  isAbstract: true
})
export class BugScalarWhereInput {
  @TypeGraphQL.Field(_type => [BugScalarWhereInput], {
    nullable: true
  })
  AND?: BugScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereInput], {
    nullable: true
  })
  OR?: BugScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereInput], {
    nullable: true
  })
  NOT?: BugScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugStatusFilter, {
    nullable: true
  })
  status?: EnumBugStatusFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugPriorityFilter, {
    nullable: true
  })
  priority?: EnumBugPriorityFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBugSeverityFilter, {
    nullable: true
  })
  severity?: EnumBugSeverityFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  websiteId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  categoryId?: StringNullableFilter | undefined;
}
