import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyCreateInput } from "../../../inputs/ApiKeyCreateInput";
import { ApiKeyUpdateInput } from "../../../inputs/ApiKeyUpdateInput";
import { ApiKeyWhereUniqueInput } from "../../../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApiKeyCreateInput, {
    nullable: false
  })
  create!: ApiKeyCreateInput;

  @TypeGraphQL.Field(_type => ApiKeyUpdateInput, {
    nullable: false
  })
  update!: ApiKeyUpdateInput;
}
