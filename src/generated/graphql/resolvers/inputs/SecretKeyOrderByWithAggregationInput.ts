import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCountOrderByAggregateInput } from "../inputs/SecretKeyCountOrderByAggregateInput";
import { SecretKeyMaxOrderByAggregateInput } from "../inputs/SecretKeyMaxOrderByAggregateInput";
import { SecretKeyMinOrderByAggregateInput } from "../inputs/SecretKeyMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SecretKeyOrderByWithAggregationInput", {
  isAbstract: true
})
export class SecretKeyOrderByWithAggregationInput {
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
  apiKeyId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SecretKeyCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SecretKeyMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SecretKeyMinOrderByAggregateInput | undefined;
}
