import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Feature } from "../../../models/Feature";
import { User } from "../../../models/User";
import { Website } from "../../../models/Website";
import { FeatureCommentsArgs } from "./args/FeatureCommentsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Feature)
export class FeatureRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Website, {
    nullable: false
  })
  async website(@TypeGraphQL.Root() feature: Feature, @TypeGraphQL.Ctx() ctx: any): Promise<Website> {
    return getPrismaFromContext(ctx).feature.findUnique({
      where: {
        id: feature.id,
      },
    }).website({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() feature: Feature, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FeatureCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).feature.findUnique({
      where: {
        id: feature.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() feature: Feature, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).feature.findUnique({
      where: {
        id: feature.id,
      },
    }).User({});
  }
}
