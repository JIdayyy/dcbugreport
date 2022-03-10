import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { File } from "../models/File";
import { User } from "../models/User";
import { Website } from "../models/Website";
import { BugCount } from "../resolvers/outputs/BugCount";

@TypeGraphQL.ObjectType("Bug", {
  isAbstract: true
})
export class Bug {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  priority!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  severity!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  Website?: Website | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websiteId?: string | null;

  File?: File[];

  @TypeGraphQL.Field(_type => BugCount, {
    nullable: true
  })
  _count?: BugCount | null;
}
