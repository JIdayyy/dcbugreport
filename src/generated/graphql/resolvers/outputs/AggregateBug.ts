import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCountAggregate } from "../outputs/BugCountAggregate";
import { BugMaxAggregate } from "../outputs/BugMaxAggregate";
import { BugMinAggregate } from "../outputs/BugMinAggregate";

@TypeGraphQL.ObjectType("AggregateBug", {
  isAbstract: true
})
export class AggregateBug {
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
