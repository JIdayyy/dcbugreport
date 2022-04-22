import { GetSecretKeyInputs } from './../Inputs/getSecretKeyInputs';
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ArgsType()
class GetSecretKeyArgs {
  @TypeGraphQL.Field((_type) => GetSecretKeyInputs, {
    nullable: false,
  })
  where!: GetSecretKeyInputs;
}

export default GetSecretKeyArgs;
