import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCountAggregate } from "../outputs/ApiKeyCountAggregate";
import { ApiKeyMaxAggregate } from "../outputs/ApiKeyMaxAggregate";
import { ApiKeyMinAggregate } from "../outputs/ApiKeyMinAggregate";

@TypeGraphQL.ObjectType("AggregateApiKey", {
  isAbstract: true
})
export class AggregateApiKey {
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
