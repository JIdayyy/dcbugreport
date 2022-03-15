import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { Feature } from "../../../models/Feature";
import { Website } from "../../../models/Website";
import { WebsiteBugArgs } from "./args/WebsiteBugArgs";
import { WebsiteFeatureArgs } from "./args/WebsiteFeatureArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Website)
export class WebsiteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Bug], {
    nullable: false
  })
  async Bug(@TypeGraphQL.Root() website: Website, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WebsiteBugArgs): Promise<Bug[]> {
    return getPrismaFromContext(ctx).website.findUnique({
      where: {
        id: website.id,
      },
    }).Bug(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Feature], {
    nullable: false
  })
  async Feature(@TypeGraphQL.Root() website: Website, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WebsiteFeatureArgs): Promise<Feature[]> {
    return getPrismaFromContext(ctx).website.findUnique({
      where: {
        id: website.id,
      },
    }).Feature(args);
  }
}
