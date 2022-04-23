/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';
import { WebsiteWhereUniqueInput } from '../../generated/graphql';

@TypeGraphQL.ArgsType()
class GetApiKeyArgs {
  @TypeGraphQL.Field((_type) => WebsiteWhereUniqueInput, {
    nullable: false,
  })
  where!: WebsiteWhereUniqueInput;
}

export default GetApiKeyArgs;
