import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { Category } from "../../../models/Category";
import { CategoryBugArgs } from "./args/CategoryBugArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Bug], {
    nullable: false
  })
  async Bug(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryBugArgs): Promise<Bug[]> {
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).Bug(args);
  }
}
