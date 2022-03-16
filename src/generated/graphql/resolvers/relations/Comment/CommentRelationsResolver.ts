import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { Comment } from "../../../models/Comment";
import { Feature } from "../../../models/Feature";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Feature, {
    nullable: true
  })
  async Feature(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Feature | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).Feature({});
  }

  @TypeGraphQL.FieldResolver(_type => Bug, {
    nullable: true
  })
  async Bug(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Bug | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).Bug({});
  }
}
