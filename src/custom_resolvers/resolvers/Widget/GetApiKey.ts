import { ApiKeyModel } from '../../models/apiKey';
import { generateApiKey } from './../../../services/authentication';
/* eslint-disable @typescript-eslint/no-unused-vars */
import GetWidgetTokenARgs from '../../Args/getWidgetTokenArgs';
import { ApolloError } from 'apollo-server-core';
import { GraphQLResolveInfo } from 'graphql';
import { Args, Authorized, Ctx, Info, Query, Resolver } from 'type-graphql';
import { Role } from '../../../generated/graphql';
import { GQLContext } from '@interfaces';
import GetApiKeyArgs from '../../Args/getWidgetTokenArgs';

@Resolver()
export class GetApiKey {
  @Authorized([Role.ADMIN, Role.MANAGER, Role.SUPER_ADMIN])
  @Query((_returns) => ApiKeyModel, {
    nullable: false,
  })
  async generateApiKey(
    @Info() info: GraphQLResolveInfo,
    @Ctx() ctx: GQLContext,
    @Args() args: GetApiKeyArgs
  ): Promise<ApiKeyModel> {
    if (!args.where.id) throw new ApolloError('You must provide a website id');

    const generatedApiKey = await ctx.prisma.apiKey.create({
      data: {
        value: await generateApiKey({
          websiteId: args.where.id,
        }),
        user: {
          connect: {
            id: ctx.user.id,
          },
        },
        website: {
          connect: {
            id: args.where.id,
          },
        },
      },
    });

    return { api_key: generatedApiKey.value, id: generatedApiKey.id };
  }
}
