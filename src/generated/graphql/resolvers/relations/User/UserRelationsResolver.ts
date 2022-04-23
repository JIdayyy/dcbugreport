import * as TypeGraphQL from "type-graphql";
import { ApiKey } from "../../../models/ApiKey";
import { Bug } from "../../../models/Bug";
import { Comment } from "../../../models/Comment";
import { Feature } from "../../../models/Feature";
import { File } from "../../../models/File";
import { Notification } from "../../../models/Notification";
import { SecretKey } from "../../../models/SecretKey";
import { User } from "../../../models/User";
import { UserBugArgs } from "./args/UserBugArgs";
import { UserCommentArgs } from "./args/UserCommentArgs";
import { UserFeatureArgs } from "./args/UserFeatureArgs";
import { UserFilesArgs } from "./args/UserFilesArgs";
import { UserKeysArgs } from "./args/UserKeysArgs";
import { UserNotificationArgs } from "./args/UserNotificationArgs";
import { UserNotifications_sentArgs } from "./args/UserNotifications_sentArgs";
import { UserSecret_keyArgs } from "./args/UserSecret_keyArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [File], {
    nullable: false
  })
  async files(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFilesArgs): Promise<File[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).files(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Bug], {
    nullable: false
  })
  async Bug(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBugArgs): Promise<Bug[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Bug(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async Notification(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotificationArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Notification(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications_sent(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserNotifications_sentArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).notifications_sent(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async Comment(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Comment(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Feature], {
    nullable: false
  })
  async feature(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFeatureArgs): Promise<Feature[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).feature(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ApiKey], {
    nullable: false
  })
  async Keys(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserKeysArgs): Promise<ApiKey[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Keys(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SecretKey], {
    nullable: false
  })
  async secret_key(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSecret_keyArgs): Promise<SecretKey[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).secret_key(args);
  }
}
