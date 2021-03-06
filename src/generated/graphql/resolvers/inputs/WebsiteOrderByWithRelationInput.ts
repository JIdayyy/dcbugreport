import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyOrderByRelationAggregateInput } from "../inputs/ApiKeyOrderByRelationAggregateInput";
import { BugOrderByRelationAggregateInput } from "../inputs/BugOrderByRelationAggregateInput";
import { FeatureOrderByRelationAggregateInput } from "../inputs/FeatureOrderByRelationAggregateInput";
import { SecretKeyOrderByRelationAggregateInput } from "../inputs/SecretKeyOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WebsiteOrderByWithRelationInput", {
  isAbstract: true
})
export class WebsiteOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isPreview?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BugOrderByRelationAggregateInput, {
    nullable: true
  })
  Bug?: BugOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FeatureOrderByRelationAggregateInput, {
    nullable: true
  })
  Feature?: FeatureOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyOrderByRelationAggregateInput, {
    nullable: true
  })
  ApiKey?: ApiKeyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyOrderByRelationAggregateInput, {
    nullable: true
  })
  secret_key?: SecretKeyOrderByRelationAggregateInput | undefined;
}
