import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugAvgAggregate } from "../outputs/BugAvgAggregate";
import { BugCountAggregate } from "../outputs/BugCountAggregate";
import { BugMaxAggregate } from "../outputs/BugMaxAggregate";
import { BugMinAggregate } from "../outputs/BugMinAggregate";
import { BugSumAggregate } from "../outputs/BugSumAggregate";
import { BugPriority } from "../../enums/BugPriority";
import { BugSeverity } from "../../enums/BugSeverity";
import { BugStatus } from "../../enums/BugStatus";
import { ValidationStatus } from "../../enums/ValidationStatus";

@TypeGraphQL.ObjectType("BugGroupBy", {
  isAbstract: true
})
export class BugGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

  @TypeGraphQL.Field(_type => ValidationStatus, {
    nullable: false
  })
  validation_status!: "VALIDATED" | "NOT_VALIDATED" | "PENDING";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  categoryId!: string | null;

  @TypeGraphQL.Field(_type => BugCountAggregate, {
    nullable: true
  })
  _count!: BugCountAggregate | null;

  @TypeGraphQL.Field(_type => BugAvgAggregate, {
    nullable: true
  })
  _avg!: BugAvgAggregate | null;

  @TypeGraphQL.Field(_type => BugSumAggregate, {
    nullable: true
  })
  _sum!: BugSumAggregate | null;

  @TypeGraphQL.Field(_type => BugMinAggregate, {
    nullable: true
  })
  _min!: BugMinAggregate | null;

  @TypeGraphQL.Field(_type => BugMaxAggregate, {
    nullable: true
  })
  _max!: BugMaxAggregate | null;
}
