/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';
import {
  WebsiteWhereInput,
  WebsiteWhereUniqueInput,
} from '../../generated/graphql';

@TypeGraphQL.ArgsType()
class GetWidgetTokenARgs {
  @TypeGraphQL.Field((_type) => WebsiteWhereUniqueInput, {
    nullable: false,
  })
  where!: WebsiteWhereUniqueInput;
}

export default GetWidgetTokenARgs;
