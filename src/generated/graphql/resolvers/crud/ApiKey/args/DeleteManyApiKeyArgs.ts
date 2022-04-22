import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyWhereInput } from "../../../inputs/ApiKeyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  where?: ApiKeyWhereInput | undefined;
}
