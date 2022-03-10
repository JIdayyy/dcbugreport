import * as TypeGraphQL from "type-graphql";
import { Bug } from "../../../models/Bug";
import { Website } from "../../../models/Website";
import { WebsiteBugArgs } from "./args/WebsiteBugArgs";
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
}
