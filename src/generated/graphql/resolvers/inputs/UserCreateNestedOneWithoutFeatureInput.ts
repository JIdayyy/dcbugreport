import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFeatureInput } from "../inputs/UserCreateOrConnectWithoutFeatureInput";
import { UserCreateWithoutFeatureInput } from "../inputs/UserCreateWithoutFeatureInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFeatureInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFeatureInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFeatureInput, {
    nullable: true
  })
  create?: UserCreateWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFeatureInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
