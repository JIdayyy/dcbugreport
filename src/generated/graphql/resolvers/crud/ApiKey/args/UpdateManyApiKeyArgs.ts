import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyUpdateManyMutationInput } from "../../../inputs/ApiKeyUpdateManyMutationInput";
import { ApiKeyWhereInput } from "../../../inputs/ApiKeyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApiKeyArgs {
  @TypeGraphQL.Field(_type => ApiKeyUpdateManyMutationInput, {
    nullable: false
  })
  data!: ApiKeyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ApiKeyWhereInput, {
    nullable: true
  })
  where?: ApiKeyWhereInput | undefined;
}
