import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Bug } from "../models/Bug";
import { Feature } from "../models/Feature";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Comment", {
  isAbstract: true
})
export class Comment {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

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

  Feature?: Feature | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  featureId?: string | null;

  Bug?: Bug | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bugId?: string | null;
}
