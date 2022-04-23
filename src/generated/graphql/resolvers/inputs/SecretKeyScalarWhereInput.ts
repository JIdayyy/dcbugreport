import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SecretKeyScalarWhereInput", {
  isAbstract: true
})
export class SecretKeyScalarWhereInput {
  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereInput], {
    nullable: true
  })
  AND?: SecretKeyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereInput], {
    nullable: true
  })
  OR?: SecretKeyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereInput], {
    nullable: true
  })
  NOT?: SecretKeyScalarWhereInput[] | undefined;

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
