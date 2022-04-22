import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyCreateInput } from "../../../inputs/SecretKeyCreateInput";
import { SecretKeyUpdateInput } from "../../../inputs/SecretKeyUpdateInput";
import { SecretKeyWhereUniqueInput } from "../../../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateInput, {
    nullable: false
  })
  create!: SecretKeyCreateInput;

  @TypeGraphQL.Field(_type => SecretKeyUpdateInput, {
    nullable: false
  })
  update!: SecretKeyUpdateInput;
}
