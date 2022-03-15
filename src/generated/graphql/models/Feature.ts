import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { User } from "../models/User";
import { Website } from "../models/Website";
import { FeatureCount } from "../resolvers/outputs/FeatureCount";

@TypeGraphQL.ObjectType("Feature", {
  isAbstract: true
})
export class Feature {
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
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  website?: Website;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

  comments?: Comment[];

  User?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  @TypeGraphQL.Field(_type => FeatureCount, {
    nullable: true
  })
  _count?: FeatureCount | null;
}
