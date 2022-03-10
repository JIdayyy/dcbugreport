import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { Category } from "../../../models/Category";
import { File } from "../../../models/File";
import { User } from "../../../models/User";
import { Website } from "../../../models/Website";
import { BugFileArgs } from "./args/BugFileArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Bug)
export class BugRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() bug: Bug, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).bug.findUnique({
      where: {
        id: bug.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Website, {
    nullable: false
  })
  async Website(@TypeGraphQL.Root() bug: Bug, @TypeGraphQL.Ctx() ctx: any): Promise<Website> {
    return getPrismaFromContext(ctx).bug.findUnique({
      where: {
        id: bug.id,
      },
    }).Website({});
  }

  @TypeGraphQL.FieldResolver(_type => [File], {
    nullable: false
  })
  async File(@TypeGraphQL.Root() bug: Bug, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BugFileArgs): Promise<File[]> {
    return getPrismaFromContext(ctx).bug.findUnique({
      where: {
        id: bug.id,
      },
    }).File(args);
  }

  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: true
  })
  async Category(@TypeGraphQL.Root() bug: Bug, @TypeGraphQL.Ctx() ctx: any): Promise<Category | null> {
    return getPrismaFromContext(ctx).bug.findUnique({
      where: {
        id: bug.id,
      },
    }).Category({});
  }
}
