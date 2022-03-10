import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCountAggregate } from "../outputs/BugCountAggregate";
import { BugMaxAggregate } from "../outputs/BugMaxAggregate";
import { BugMinAggregate } from "../outputs/BugMinAggregate";

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  websiteId!: string | null;

  @TypeGraphQL.Field(_type => BugCountAggregate, {
    nullable: true
  })
  _count!: BugCountAggregate | null;

  @TypeGraphQL.Field(_type => BugMinAggregate, {
    nullable: true
  })
  _min!: BugMinAggregate | null;

  @TypeGraphQL.Field(_type => BugMaxAggregate, {
    nullable: true
  })
  _max!: BugMaxAggregate | null;
}
