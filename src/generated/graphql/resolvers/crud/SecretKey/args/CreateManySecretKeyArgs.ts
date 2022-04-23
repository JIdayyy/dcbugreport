import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyCreateManyInput } from "../../../inputs/SecretKeyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySecretKeyArgs {
  @TypeGraphQL.Field(_type => [SecretKeyCreateManyInput], {
    nullable: false
  })
  data!: SecretKeyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
