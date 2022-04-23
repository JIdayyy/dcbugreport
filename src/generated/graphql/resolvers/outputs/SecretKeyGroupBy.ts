import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCountAggregate } from "../outputs/SecretKeyCountAggregate";
import { SecretKeyMaxAggregate } from "../outputs/SecretKeyMaxAggregate";
import { SecretKeyMinAggregate } from "../outputs/SecretKeyMinAggregate";

@TypeGraphQL.ObjectType("SecretKeyGroupBy", {
  isAbstract: true
})
export class SecretKeyGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apiKeyId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

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
