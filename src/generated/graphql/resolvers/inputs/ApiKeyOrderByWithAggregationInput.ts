import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCountOrderByAggregateInput } from "../inputs/ApiKeyCountOrderByAggregateInput";
import { ApiKeyMaxOrderByAggregateInput } from "../inputs/ApiKeyMaxOrderByAggregateInput";
import { ApiKeyMinOrderByAggregateInput } from "../inputs/ApiKeyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ApiKeyOrderByWithAggregationInput", {
  isAbstract: true
})
export class ApiKeyOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  websiteId?: "asc" | "desc" | undefined;

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
  secretKeyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ApiKeyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ApiKeyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ApiKeyMinOrderByAggregateInput | undefined;
}
