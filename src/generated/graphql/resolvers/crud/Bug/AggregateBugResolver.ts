import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBugArgs } from "./args/AggregateBugArgs";
import { Bug } from "../../../models/Bug";
import { AggregateBug } from "../../outputs/AggregateBug";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bug)
export class AggregateBugResolver {
  @TypeGraphQL.Query(_returns => AggregateBug, {
    nullable: false
  })
  async aggregateBug(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBugArgs): Promise<AggregateBug> {
    return getPrismaFromContext(ctx).bug.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
