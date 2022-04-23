import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyUpdateInput } from "../../../inputs/SecretKeyUpdateInput";
import { SecretKeyWhereUniqueInput } from "../../../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyUpdateInput, {
    nullable: false
  })
  data!: SecretKeyUpdateInput;

  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;
}
