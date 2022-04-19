import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Bug } from "../models/Bug";
import { Comment } from "../models/Comment";
import { Feature } from "../models/Feature";
import { File } from "../models/File";
import { Notification } from "../models/Notification";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  files?: File[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | null;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: false
  })
  role!: Array<"SUPER_ADMIN" | "ADMIN" | "MANAGER" | "USER" | "WIDGET">;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  Bug?: Bug[];

  Notification?: Notification[];

  notifications_sent?: Notification[];

  Comment?: Comment[];

  feature?: Feature[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
