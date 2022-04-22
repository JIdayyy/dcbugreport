import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateApiKeyArgs } from "./args/UpdateApiKeyArgs";
import { ApiKey } from "../../../models/ApiKey";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ApiKey)
export class UpdateApiKeyResolver {
  @TypeGraphQL.Mutation(_returns => ApiKey, {
    nullable: true
  })
  async updateApiKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateApiKeyArgs): Promise<ApiKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).apiKey.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
