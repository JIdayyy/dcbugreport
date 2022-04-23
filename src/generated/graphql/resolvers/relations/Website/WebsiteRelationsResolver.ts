import * as TypeGraphQL from "type-graphql";
import { ApiKey } from "../../../models/ApiKey";
import { Bug } from "../../../models/Bug";
import { Feature } from "../../../models/Feature";
import { SecretKey } from "../../../models/SecretKey";
import { Website } from "../../../models/Website";
import { WebsiteApiKeyArgs } from "./args/WebsiteApiKeyArgs";
import { WebsiteBugArgs } from "./args/WebsiteBugArgs";
import { WebsiteFeatureArgs } from "./args/WebsiteFeatureArgs";
import { WebsiteSecret_keyArgs } from "./args/WebsiteSecret_keyArgs";
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

  @TypeGraphQL.FieldResolver(_type => [ApiKey], {
    nullable: false
  })
  async ApiKey(@TypeGraphQL.Root() website: Website, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WebsiteApiKeyArgs): Promise<ApiKey[]> {
    return getPrismaFromContext(ctx).website.findUnique({
      where: {
        id: website.id,
      },
    }).ApiKey(args);
  }

  @TypeGraphQL.FieldResolver(_type => [SecretKey], {
    nullable: false
  })
  async secret_key(@TypeGraphQL.Root() website: Website, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: WebsiteSecret_keyArgs): Promise<SecretKey[]> {
    return getPrismaFromContext(ctx).website.findUnique({
      where: {
        id: website.id,
      },
    }).secret_key(args);
  }
}
