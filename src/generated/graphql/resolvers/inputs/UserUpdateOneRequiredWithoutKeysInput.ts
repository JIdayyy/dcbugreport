import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutKeysInput } from "../inputs/UserCreateOrConnectWithoutKeysInput";
import { UserCreateWithoutKeysInput } from "../inputs/UserCreateWithoutKeysInput";
import { UserUpdateWithoutKeysInput } from "../inputs/UserUpdateWithoutKeysInput";
import { UserUpsertWithoutKeysInput } from "../inputs/UserUpsertWithoutKeysInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutKeysInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutKeysInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutKeysInput, {
    nullable: true
  })
  create?: UserCreateWithoutKeysInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutKeysInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutKeysInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutKeysInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutKeysInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutKeysInput, {
    nullable: true
  })
  update?: UserUpdateWithoutKeysInput | undefined;
}
