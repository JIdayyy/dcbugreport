import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyOrderByWithAggregationInput } from "../../../inputs/ApiKeyOrderByWithAggregationInput";
import { ApiKeyScalarWhereWithAggregatesInput } from "../../../inputs/ApiKeyScalarWhereWithAggregatesInput";
import { ApiKeyWhereInput } from "../../../inputs/ApiKeyWhereInput";
import { ApiKeyScalarFieldEnum } from "../../../../enums/ApiKeyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  where?: ApiKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ApiKeyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "value" | "websiteId" | "created_at" | "updated_at" | "secretKeyId">;

  @TypeGraphQL.Field(_type => ApiKeyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ApiKeyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
