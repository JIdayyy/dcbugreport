import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { File } from "../../../models/File";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => File)
export class FileRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Bug, {
    nullable: false
  })
  async bug(@TypeGraphQL.Root() file: File, @TypeGraphQL.Ctx() ctx: any): Promise<Bug> {
    return getPrismaFromContext(ctx).file.findUnique({
      where: {
        id: file.id,
      },
    }).bug({});
  }
}
