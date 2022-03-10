import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugListRelationFilter } from "../inputs/BugListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
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
}
