import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyCreateInput } from "../../../inputs/SecretKeyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyCreateInput, {
    nullable: false
  })
  data!: SecretKeyCreateInput;
}
