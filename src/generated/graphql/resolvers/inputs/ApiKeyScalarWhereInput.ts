import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ApiKeyScalarWhereInput", {
  isAbstract: true
})
export class ApiKeyScalarWhereInput {
  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereInput], {
    nullable: true
  })
  AND?: ApiKeyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereInput], {
    nullable: true
  })
  OR?: ApiKeyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereInput], {
    nullable: true
  })
  NOT?: ApiKeyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  secretKeyId?: StringNullableFilter | undefined;
}
