import * as TypeGraphQL from "type-graphql";
import { ApiKey } from "../../../models/ApiKey";
import { SecretKey } from "../../../models/SecretKey";
import { User } from "../../../models/User";
import { Website } from "../../../models/Website";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ApiKey)
export class ApiKeyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() apiKey: ApiKey, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).apiKey.findUnique({
      where: {
        id: apiKey.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Website, {
    nullable: false
  })
  async website(@TypeGraphQL.Root() apiKey: ApiKey, @TypeGraphQL.Ctx() ctx: any): Promise<Website> {
    return getPrismaFromContext(ctx).apiKey.findUnique({
      where: {
        id: apiKey.id,
      },
    }).website({});
  }

  @TypeGraphQL.FieldResolver(_type => SecretKey, {
    nullable: true
  })
  async secret_key(@TypeGraphQL.Root() apiKey: ApiKey, @TypeGraphQL.Ctx() ctx: any): Promise<SecretKey | null> {
    return getPrismaFromContext(ctx).apiKey.findUnique({
      where: {
        id: apiKey.id,
      },
    }).secret_key({});
  }
}
