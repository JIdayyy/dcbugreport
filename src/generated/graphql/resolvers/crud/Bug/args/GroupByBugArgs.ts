import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugOrderByWithAggregationInput } from "../../../inputs/BugOrderByWithAggregationInput";
import { BugScalarWhereWithAggregatesInput } from "../../../inputs/BugScalarWhereWithAggregatesInput";
import { BugWhereInput } from "../../../inputs/BugWhereInput";
import { BugScalarFieldEnum } from "../../../../enums/BugScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBugArgs {
  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  where?: BugWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BugOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BugOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "number" | "description" | "status" | "priority" | "severity" | "created_at" | "updated_at" | "userId" | "websiteId" | "validation_status" | "categoryId">;

  @TypeGraphQL.Field(_type => BugScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BugScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
