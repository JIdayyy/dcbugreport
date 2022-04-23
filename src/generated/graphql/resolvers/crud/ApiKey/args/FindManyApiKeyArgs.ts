import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyOrderByWithRelationInput } from "../../../inputs/ApiKeyOrderByWithRelationInput";
import { ApiKeyWhereInput } from "../../../inputs/ApiKeyWhereInput";
import { ApiKeyWhereUniqueInput } from "../../../inputs/ApiKeyWhereUniqueInput";
import { ApiKeyScalarFieldEnum } from "../../../../enums/ApiKeyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  where?: ApiKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ApiKeyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: true
  })
  cursor?: ApiKeyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "value" | "websiteId" | "created_at" | "updated_at" | "secretKeyId"> | undefined;
}
