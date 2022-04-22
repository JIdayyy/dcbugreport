import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyOrderByWithAggregationInput } from "../../../inputs/SecretKeyOrderByWithAggregationInput";
import { SecretKeyScalarWhereWithAggregatesInput } from "../../../inputs/SecretKeyScalarWhereWithAggregatesInput";
import { SecretKeyWhereInput } from "../../../inputs/SecretKeyWhereInput";
import { SecretKeyScalarFieldEnum } from "../../../../enums/SecretKeyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  where?: SecretKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SecretKeyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "value" | "websiteId" | "apiKeyId" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => SecretKeyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SecretKeyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
