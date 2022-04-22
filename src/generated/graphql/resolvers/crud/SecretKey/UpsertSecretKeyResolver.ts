import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertSecretKeyArgs } from "./args/UpsertSecretKeyArgs";
import { SecretKey } from "../../../models/SecretKey";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SecretKey)
export class UpsertSecretKeyResolver {
  @TypeGraphQL.Mutation(_returns => SecretKey, {
    nullable: false
  })
  async upsertSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSecretKeyArgs): Promise<SecretKey> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
