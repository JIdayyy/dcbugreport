/* eslint-disable @typescript-eslint/no-unused-vars */
import GetWidgetTokenARgs from '../../Args/getWidgetTokenArgs';
import { ApolloError } from 'apollo-server-core';
import { GraphQLResolveInfo } from 'graphql';
import { Args, Authorized, Info, Query, Resolver } from 'type-graphql';
import { Role } from '../../../generated/graphql';
import { getWidgetToken } from '../../../services/authentication';
import { WidgetToken } from '../../models/widgetToken';

@Resolver()
export class GetWidgetToken {
  @Authorized([Role.ADMIN, Role.MANAGER, Role.SUPER_ADMIN])
  @Query((_returns) => WidgetToken, {
    nullable: false,
  })
  async widgetToken(
    @Info() info: GraphQLResolveInfo,
    @Args() args: GetWidgetTokenARgs
  ): Promise<WidgetToken> {
    if (!args.where.id) throw new ApolloError('You must provide a website id');

    const widgetToken = await getWidgetToken({
      websiteId: args.where.id,
    });

    return { widget_token: widgetToken };
  }
}
