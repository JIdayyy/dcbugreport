import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyWhereInput } from "../../../inputs/SecretKeyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySecretKeyArgs {
  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  where?: SecretKeyWhereInput | undefined;
}
