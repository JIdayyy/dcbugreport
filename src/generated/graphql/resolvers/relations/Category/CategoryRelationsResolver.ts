import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { Category } from "../../../models/Category";
import { Feature } from "../../../models/Feature";
import { CategoryBugArgs } from "./args/CategoryBugArgs";
import { CategoryFeatureArgs } from "./args/CategoryFeatureArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Feature], {
    nullable: false
  })
  async Feature(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CategoryFeatureArgs): Promise<Feature[]> {
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).Feature(args);
  }
}
