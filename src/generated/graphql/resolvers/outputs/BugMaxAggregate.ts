import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugPriority } from "../../enums/BugPriority";
import { BugSeverity } from "../../enums/BugSeverity";
import { BugStatus } from "../../enums/BugStatus";
import { ValidationStatus } from "../../enums/ValidationStatus";

@TypeGraphQL.ObjectType("BugMaxAggregate", {
  isAbstract: true
})
export class BugMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  number!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => BugStatus, {
    nullable: true
  })
  status!: "OPEN" | "IN_PROGRESS" | "CLOSED" | null;

  @TypeGraphQL.Field(_type => BugPriority, {
    nullable: true
  })
  priority!: "LOW" | "MEDIUM" | "HIGH" | null;

  @TypeGraphQL.Field(_type => BugSeverity, {
    nullable: true
  })
  severity!: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websiteId!: string | null;

  @TypeGraphQL.Field(_type => ValidationStatus, {
    nullable: true
  })
  validation_status!: "VALIDATED" | "NOT_VALIDATED" | "PENDING" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categoryId!: string | null;
}
