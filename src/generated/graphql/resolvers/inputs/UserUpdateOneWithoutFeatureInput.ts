import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFeatureInput } from "../inputs/UserCreateOrConnectWithoutFeatureInput";
import { UserCreateWithoutFeatureInput } from "../inputs/UserCreateWithoutFeatureInput";
import { UserUpdateWithoutFeatureInput } from "../inputs/UserUpdateWithoutFeatureInput";
import { UserUpsertWithoutFeatureInput } from "../inputs/UserUpsertWithoutFeatureInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFeatureInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFeatureInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFeatureInput, {
    nullable: true
  })
  create?: UserCreateWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFeatureInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFeatureInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFeatureInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFeatureInput | undefined;
}
