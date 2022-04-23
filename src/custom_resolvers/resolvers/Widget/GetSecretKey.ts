/* eslint-disable @typescript-eslint/no-unused-vars */
import { SecretKeyModel } from '../../models/secretKey';
import { generateSecretKey } from '../../../services/authentication';
import { ApolloError } from 'apollo-server-core';
import { Args, Authorized, Ctx, Query, Resolver } from 'type-graphql';
import { Role } from '../../../generated/graphql';
import { GQLContext } from '@interfaces';
import GetSecretKeyArgs from '../../Args/getSecretKeyArgs';
import { hashSync } from 'bcrypt';

@Resolver()
export class GetSecretKey {
  @Authorized([Role.ADMIN, Role.MANAGER, Role.SUPER_ADMIN])
  @Query(() => SecretKeyModel, {
    nullable: false,
  })
  async generateSecretKey(
    @Ctx() ctx: GQLContext,
    @Args() args: GetSecretKeyArgs
  ): Promise<SecretKeyModel> {
    if (!args.where.websiteId)
      throw new ApolloError('You must provide a website id');

    const generatedSecretKey = await ctx.prisma.secretKey.create({
      data: {
        value: await generateSecretKey({
          websiteId: args.where.websiteId,
          apiKeyId: args.where.apiKeyId,
        }),
        website: {
          connect: {
            id: args.where.websiteId,
          },
        },
        user: {
          connect: {
            id: ctx.user.id,
          },
        },
        api_key: {
          connect: {
            id: args.where.apiKeyId,
          },
        },
      },
    });

    const hashedkey = hashSync(generatedSecretKey.value, 10);

    return { secret_key: hashedkey };
  }
}
