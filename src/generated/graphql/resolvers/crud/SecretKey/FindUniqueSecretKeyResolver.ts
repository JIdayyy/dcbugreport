import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSecretKeyArgs } from "./args/FindUniqueSecretKeyArgs";
import { SecretKey } from "../../../models/SecretKey";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SecretKey)
export class FindUniqueSecretKeyResolver {
  @TypeGraphQL.Query(_returns => SecretKey, {
    nullable: true
  })
  async secretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSecretKeyArgs): Promise<SecretKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
