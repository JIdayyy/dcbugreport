import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyUpdateInput } from "../../../inputs/ApiKeyUpdateInput";
import { ApiKeyWhereUniqueInput } from "../../../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyUpdateInput, {
    nullable: false
  })
  data!: ApiKeyUpdateInput;

  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;
}
