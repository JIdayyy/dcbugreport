import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Bug } from "../models/Bug";
import { Feature } from "../models/Feature";
import { WebsiteCount } from "../resolvers/outputs/WebsiteCount";

@TypeGraphQL.ObjectType("Website", {
  isAbstract: true
})
export class Website {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logo!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPreview!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  Bug?: Bug[];

  Feature?: Feature[];

  @TypeGraphQL.Field(_type => WebsiteCount, {
    nullable: true
  })
  _count?: WebsiteCount | null;
}
