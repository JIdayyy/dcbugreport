import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSecret_keyInput } from "../inputs/UserCreateOrConnectWithoutSecret_keyInput";
import { UserCreateWithoutSecret_keyInput } from "../inputs/UserCreateWithoutSecret_keyInput";
import { UserUpdateWithoutSecret_keyInput } from "../inputs/UserUpdateWithoutSecret_keyInput";
import { UserUpsertWithoutSecret_keyInput } from "../inputs/UserUpsertWithoutSecret_keyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSecret_keyInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSecret_keyInput, {
    nullable: true
  })
  create?: UserCreateWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSecret_keyInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSecret_keyInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSecret_keyInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSecret_keyInput | undefined;
}
