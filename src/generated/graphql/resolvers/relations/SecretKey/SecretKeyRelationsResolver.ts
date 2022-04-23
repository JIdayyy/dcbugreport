import * as TypeGraphQL from "type-graphql";
import { ApiKey } from "../../../models/ApiKey";
import { SecretKey } from "../../../models/SecretKey";
import { User } from "../../../models/User";
import { Website } from "../../../models/Website";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SecretKey)
export class SecretKeyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() secretKey: SecretKey, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).secretKey.findUnique({
      where: {
        id: secretKey.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Website, {
    nullable: false
  })
  async website(@TypeGraphQL.Root() secretKey: SecretKey, @TypeGraphQL.Ctx() ctx: any): Promise<Website> {
    return getPrismaFromContext(ctx).secretKey.findUnique({
      where: {
        id: secretKey.id,
      },
    }).website({});
  }

  @TypeGraphQL.FieldResolver(_type => ApiKey, {
    nullable: false
  })
  async api_key(@TypeGraphQL.Root() secretKey: SecretKey, @TypeGraphQL.Ctx() ctx: any): Promise<ApiKey> {
    return getPrismaFromContext(ctx).secretKey.findUnique({
      where: {
        id: secretKey.id,
      },
    }).api_key({});
  }
}
