import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSecretKeyArgs } from "./args/AggregateSecretKeyArgs";
import { CreateManySecretKeyArgs } from "./args/CreateManySecretKeyArgs";
import { CreateSecretKeyArgs } from "./args/CreateSecretKeyArgs";
import { DeleteManySecretKeyArgs } from "./args/DeleteManySecretKeyArgs";
import { DeleteSecretKeyArgs } from "./args/DeleteSecretKeyArgs";
import { FindFirstSecretKeyArgs } from "./args/FindFirstSecretKeyArgs";
import { FindManySecretKeyArgs } from "./args/FindManySecretKeyArgs";
import { FindUniqueSecretKeyArgs } from "./args/FindUniqueSecretKeyArgs";
import { GroupBySecretKeyArgs } from "./args/GroupBySecretKeyArgs";
import { UpdateManySecretKeyArgs } from "./args/UpdateManySecretKeyArgs";
import { UpdateSecretKeyArgs } from "./args/UpdateSecretKeyArgs";
import { UpsertSecretKeyArgs } from "./args/UpsertSecretKeyArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SecretKey } from "../../../models/SecretKey";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSecretKey } from "../../outputs/AggregateSecretKey";
import { SecretKeyGroupBy } from "../../outputs/SecretKeyGroupBy";

@TypeGraphQL.Resolver(_of => SecretKey)
export class SecretKeyCrudResolver {
  @TypeGraphQL.Query(_returns => SecretKey, {
    nullable: true
  })
  async secretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSecretKeyArgs): Promise<SecretKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SecretKey, {
    nullable: true
  })
  async findFirstSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSecretKeyArgs): Promise<SecretKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SecretKey], {
    nullable: false
  })
  async secretKeys(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySecretKeyArgs): Promise<SecretKey[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SecretKey, {
    nullable: false
  })
  async createSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSecretKeyArgs): Promise<SecretKey> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySecretKeyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SecretKey, {
    nullable: true
  })
  async deleteSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSecretKeyArgs): Promise<SecretKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SecretKey, {
    nullable: true
  })
  async updateSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSecretKeyArgs): Promise<SecretKey | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySecretKeyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySecretKeyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SecretKey, {
    nullable: false
  })
  async upsertSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSecretKeyArgs): Promise<SecretKey> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateSecretKey, {
    nullable: false
  })
  async aggregateSecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSecretKeyArgs): Promise<AggregateSecretKey> {
    return getPrismaFromContext(ctx).secretKey.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [SecretKeyGroupBy], {
    nullable: false
  })
  async groupBySecretKey(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySecretKeyArgs): Promise<SecretKeyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).secretKey.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
