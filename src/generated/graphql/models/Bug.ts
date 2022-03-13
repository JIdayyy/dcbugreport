import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { File } from "../models/File";
import { User } from "../models/User";
import { Website } from "../models/Website";
import { BugPriority } from "../enums/BugPriority";
import { BugSeverity } from "../enums/BugSeverity";
import { BugStatus } from "../enums/BugStatus";
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BugStatus, {
    nullable: false
  })
  status!: "OPEN" | "IN_PROGRESS" | "CLOSED";

  @TypeGraphQL.Field(_type => BugPriority, {
    nullable: false
  })
  priority!: "LOW" | "MEDIUM" | "HIGH";

  @TypeGraphQL.Field(_type => BugSeverity, {
    nullable: false
  })
  severity!: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

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

  Website?: Website;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

  File?: File[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categoryId?: string | null;

  Category?: Category | null;

  @TypeGraphQL.Field(_type => BugCount, {
    nullable: true
  })
  _count?: BugCount | null;
}
