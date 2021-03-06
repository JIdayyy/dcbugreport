import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyListRelationFilter } from "../inputs/ApiKeyListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BugListRelationFilter } from "../inputs/BugListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FeatureListRelationFilter } from "../inputs/FeatureListRelationFilter";
import { SecretKeyListRelationFilter } from "../inputs/SecretKeyListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WebsiteWhereInput", {
  isAbstract: true
})
export class WebsiteWhereInput {
  @TypeGraphQL.Field(_type => [WebsiteWhereInput], {
    nullable: true
  })
  AND?: WebsiteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteWhereInput], {
    nullable: true
  })
  OR?: WebsiteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WebsiteWhereInput], {
    nullable: true
  })
  NOT?: WebsiteWhereInput[] | undefined;

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
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  logo?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isPreview?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BugListRelationFilter, {
    nullable: true
  })
  Bug?: BugListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FeatureListRelationFilter, {
    nullable: true
  })
  Feature?: FeatureListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ApiKeyListRelationFilter, {
    nullable: true
  })
  ApiKey?: ApiKeyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SecretKeyListRelationFilter, {
    nullable: true
  })
  secret_key?: SecretKeyListRelationFilter | undefined;
}
