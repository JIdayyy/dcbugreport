import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyUpdateManyMutationInput } from "../../../inputs/SecretKeyUpdateManyMutationInput";
import { SecretKeyWhereInput } from "../../../inputs/SecretKeyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyUpdateManyMutationInput, {
    nullable: false
  })
  data!: SecretKeyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  where?: SecretKeyWhereInput | undefined;
}
