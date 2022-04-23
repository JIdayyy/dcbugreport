import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyCreateInput } from "../../../inputs/ApiKeyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyCreateInput, {
    nullable: false
  })
  data!: ApiKeyCreateInput;
}
