import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WebsiteRelationFilter } from "../inputs/WebsiteRelationFilter";

@TypeGraphQL.InputType("FeatureWhereInput", {
  isAbstract: true
})
export class FeatureWhereInput {
  @TypeGraphQL.Field(_type => [FeatureWhereInput], {
    nullable: true
  })
  AND?: FeatureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereInput], {
    nullable: true
  })
  OR?: FeatureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureWhereInput], {
    nullable: true
  })
  NOT?: FeatureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  is_disabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => WebsiteRelationFilter, {
    nullable: true
  })
  website?: WebsiteRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  websiteId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  categoryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;
}
