import { Ctx, Mutation, Resolver } from 'type-graphql';
import { setCookieToken } from '../../../services/authentication';
import { GQLContext } from '@interfaces';

@Resolver()
export class LogoutResolver {
  @Mutation(() => String)
  async logout(@Ctx() ctx: GQLContext): Promise<string> {
    setCookieToken('', 'token', ctx);

    return 'User successfully logged out';
  }
}
