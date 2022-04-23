import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SecretKeyRelationFilter } from "../inputs/SecretKeyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { WebsiteRelationFilter } from "../inputs/WebsiteRelationFilter";

@TypeGraphQL.InputType("ApiKeyWhereInput", {
  isAbstract: true
})
export class ApiKeyWhereInput {
  @TypeGraphQL.Field(_type => [ApiKeyWhereInput], {
    nullable: true
  })
  AND?: ApiKeyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereInput], {
    nullable: true
  })
  OR?: ApiKeyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereInput], {
    nullable: true
  })
  NOT?: ApiKeyWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SecretKeyRelationFilter, {
    nullable: true
  })
  secret_key?: SecretKeyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  secretKeyId?: StringNullableFilter | undefined;
}
