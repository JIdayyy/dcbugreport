import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { File } from "../../../models/File";
import { User } from "../../../models/User";
import { UserBugArgs } from "./args/UserBugArgs";
import { UserFilesArgs } from "./args/UserFilesArgs";
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
}
