import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyWhereUniqueInput } from "../../../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;
}
