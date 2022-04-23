import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateApiKeyArgs } from "./args/AggregateApiKeyArgs";
import { ApiKey } from "../../../models/ApiKey";
import { AggregateApiKey } from "../../outputs/AggregateApiKey";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ApiKey)
export class AggregateApiKeyResolver {
  @TypeGraphQL.Query(_returns => AggregateApiKey, {
    nullable: false
  })
  async aggregateApiKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateApiKeyArgs): Promise<AggregateApiKey> {
    return getPrismaFromContext(ctx).apiKey.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
