import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCountAggregate } from "../outputs/SecretKeyCountAggregate";
import { SecretKeyMaxAggregate } from "../outputs/SecretKeyMaxAggregate";
import { SecretKeyMinAggregate } from "../outputs/SecretKeyMinAggregate";

@TypeGraphQL.ObjectType("AggregateSecretKey", {
  isAbstract: true
})
export class AggregateSecretKey {
  @TypeGraphQL.Field(_type => SecretKeyCountAggregate, {
    nullable: true
  })
  _count!: SecretKeyCountAggregate | null;

  @TypeGraphQL.Field(_type => SecretKeyMinAggregate, {
    nullable: true
  })
  _min!: SecretKeyMinAggregate | null;

  @TypeGraphQL.Field(_type => SecretKeyMaxAggregate, {
    nullable: true
  })
  _max!: SecretKeyMaxAggregate | null;
}
