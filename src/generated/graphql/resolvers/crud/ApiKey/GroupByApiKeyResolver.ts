import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByApiKeyArgs } from "./args/GroupByApiKeyArgs";
import { ApiKey } from "../../../models/ApiKey";
import { ApiKeyGroupBy } from "../../outputs/ApiKeyGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ApiKey)
export class GroupByApiKeyResolver {
  @TypeGraphQL.Query(_returns => [ApiKeyGroupBy], {
    nullable: false
  })
  async groupByApiKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByApiKeyArgs): Promise<ApiKeyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).apiKey.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
