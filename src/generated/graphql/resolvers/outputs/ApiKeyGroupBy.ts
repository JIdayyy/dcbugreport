import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCountAggregate } from "../outputs/ApiKeyCountAggregate";
import { ApiKeyMaxAggregate } from "../outputs/ApiKeyMaxAggregate";
import { ApiKeyMinAggregate } from "../outputs/ApiKeyMinAggregate";

@TypeGraphQL.ObjectType("ApiKeyGroupBy", {
  isAbstract: true
})
export class ApiKeyGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  secretKeyId!: string | null;

  @TypeGraphQL.Field(_type => ApiKeyCountAggregate, {
    nullable: true
  })
  _count!: ApiKeyCountAggregate | null;

  @TypeGraphQL.Field(_type => ApiKeyMinAggregate, {
    nullable: true
  })
  _min!: ApiKeyMinAggregate | null;

  @TypeGraphQL.Field(_type => ApiKeyMaxAggregate, {
    nullable: true
  })
  _max!: ApiKeyMaxAggregate | null;
}
