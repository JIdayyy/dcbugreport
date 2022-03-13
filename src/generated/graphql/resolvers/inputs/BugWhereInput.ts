import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBugPriorityFilter } from "../inputs/EnumBugPriorityFilter";
import { EnumBugSeverityFilter } from "../inputs/EnumBugSeverityFilter";
import { EnumBugStatusFilter } from "../inputs/EnumBugStatusFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WebsiteRelationFilter } from "../inputs/WebsiteRelationFilter";

@TypeGraphQL.InputType("BugWhereInput", {
  isAbstract: true
})
export class BugWhereInput {
  @TypeGraphQL.Field(_type => [BugWhereInput], {
    nullable: true
  })
  AND?: BugWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugWhereInput], {
    nullable: true
  })
  OR?: BugWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugWhereInput], {
    nullable: true
  })
  NOT?: BugWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  number?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WebsiteRelationFilter, {
    nullable: true
  })
  Website?: WebsiteRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  websiteId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FileListRelationFilter, {
    nullable: true
  })
  File?: FileListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  categoryId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  Category?: CategoryRelationFilter | undefined;
}
