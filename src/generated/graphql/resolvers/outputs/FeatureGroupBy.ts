import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCountAggregate } from "../outputs/FeatureCountAggregate";
import { FeatureMaxAggregate } from "../outputs/FeatureMaxAggregate";
import { FeatureMinAggregate } from "../outputs/FeatureMinAggregate";

@TypeGraphQL.ObjectType("FeatureGroupBy", {
  isAbstract: true
})
export class FeatureGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  categoryId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => FeatureCountAggregate, {
    nullable: true
  })
  _count!: FeatureCountAggregate | null;

  @TypeGraphQL.Field(_type => FeatureMinAggregate, {
    nullable: true
  })
  _min!: FeatureMinAggregate | null;

  @TypeGraphQL.Field(_type => FeatureMaxAggregate, {
    nullable: true
  })
  _max!: FeatureMaxAggregate | null;
}
