import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCountOrderByAggregateInput } from "../inputs/NotificationCountOrderByAggregateInput";
import { NotificationMaxOrderByAggregateInput } from "../inputs/NotificationMaxOrderByAggregateInput";
import { NotificationMinOrderByAggregateInput } from "../inputs/NotificationMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NotificationOrderByWithAggregationInput", {
  isAbstract: true
})
export class NotificationOrderByWithAggregationInput {
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
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isRead?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_disabled?: "asc" | "desc" | undefined;

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
  senderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bugId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  topics?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NotificationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NotificationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NotificationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NotificationMinOrderByAggregateInput | undefined;
}
