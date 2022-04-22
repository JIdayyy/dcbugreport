import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueApiKeyArgs } from "./args/FindUniqueApiKeyArgs";
import { ApiKey } from "../../../models/ApiKey";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ApiKey)
export class FindUniqueApiKeyResolver {
  @TypeGraphQL.Query(_returns => ApiKey, {
    nullable: true
  })
  async apiKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueApiKeyArgs): Promise<ApiKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).apiKey.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
