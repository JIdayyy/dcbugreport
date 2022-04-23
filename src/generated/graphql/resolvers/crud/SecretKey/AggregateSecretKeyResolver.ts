import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSecretKeyArgs } from "./args/AggregateSecretKeyArgs";
import { SecretKey } from "../../../models/SecretKey";
import { AggregateSecretKey } from "../../outputs/AggregateSecretKey";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SecretKey)
export class AggregateSecretKeyResolver {
  @TypeGraphQL.Query(_returns => AggregateSecretKey, {
    nullable: false
  })
  async aggregateSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSecretKeyArgs): Promise<AggregateSecretKey> {
    return getPrismaFromContext(ctx).secretKey.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
