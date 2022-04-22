import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyWhereUniqueInput } from "../../../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: false
  })
  where!: ApiKeyWhereUniqueInput;
}
