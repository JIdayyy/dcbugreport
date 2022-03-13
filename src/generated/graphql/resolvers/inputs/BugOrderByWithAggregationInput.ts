import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugAvgOrderByAggregateInput } from "../inputs/BugAvgOrderByAggregateInput";
import { BugCountOrderByAggregateInput } from "../inputs/BugCountOrderByAggregateInput";
import { BugMaxOrderByAggregateInput } from "../inputs/BugMaxOrderByAggregateInput";
import { BugMinOrderByAggregateInput } from "../inputs/BugMinOrderByAggregateInput";
import { BugSumOrderByAggregateInput } from "../inputs/BugSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BugOrderByWithAggregationInput", {
  isAbstract: true
})
export class BugOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  severity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websiteId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BugCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BugCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BugAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BugAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BugMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BugMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BugMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BugMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BugSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BugSumOrderByAggregateInput | undefined;
}
