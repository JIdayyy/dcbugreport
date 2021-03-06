import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCountAggregate } from "../outputs/WebsiteCountAggregate";
import { WebsiteMaxAggregate } from "../outputs/WebsiteMaxAggregate";
import { WebsiteMinAggregate } from "../outputs/WebsiteMinAggregate";

@TypeGraphQL.ObjectType("WebsiteGroupBy", {
  isAbstract: true
})
export class WebsiteGroupBy {
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
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logo!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPreview!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => WebsiteCountAggregate, {
    nullable: true
  })
  _count!: WebsiteCountAggregate | null;

  @TypeGraphQL.Field(_type => WebsiteMinAggregate, {
    nullable: true
  })
  _min!: WebsiteMinAggregate | null;

  @TypeGraphQL.Field(_type => WebsiteMaxAggregate, {
    nullable: true
  })
  _max!: WebsiteMaxAggregate | null;
}
