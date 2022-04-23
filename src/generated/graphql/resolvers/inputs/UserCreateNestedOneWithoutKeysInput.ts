import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutKeysInput } from "../inputs/UserCreateOrConnectWithoutKeysInput";
import { UserCreateWithoutKeysInput } from "../inputs/UserCreateWithoutKeysInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutKeysInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutKeysInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutKeysInput, {
    nullable: true
  })
  create?: UserCreateWithoutKeysInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutKeysInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutKeysInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
