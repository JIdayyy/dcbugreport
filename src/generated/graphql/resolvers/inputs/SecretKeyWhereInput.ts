import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyRelationFilter } from "../inputs/ApiKeyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WebsiteRelationFilter } from "../inputs/WebsiteRelationFilter";

@TypeGraphQL.InputType("SecretKeyWhereInput", {
  isAbstract: true
})
export class SecretKeyWhereInput {
  @TypeGraphQL.Field(_type => [SecretKeyWhereInput], {
    nullable: true
  })
  AND?: SecretKeyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereInput], {
    nullable: true
  })
  OR?: SecretKeyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereInput], {
    nullable: true
  })
  NOT?: SecretKeyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WebsiteRelationFilter, {
    nullable: true
  })
  website?: WebsiteRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  websiteId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ApiKeyRelationFilter, {
    nullable: true
  })
  api_key?: ApiKeyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  apiKeyId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;
}
