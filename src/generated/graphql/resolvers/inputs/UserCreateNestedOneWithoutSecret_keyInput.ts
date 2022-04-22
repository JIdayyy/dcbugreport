import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSecret_keyInput } from "../inputs/UserCreateOrConnectWithoutSecret_keyInput";
import { UserCreateWithoutSecret_keyInput } from "../inputs/UserCreateWithoutSecret_keyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSecret_keyInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSecret_keyInput, {
    nullable: true
  })
  create?: UserCreateWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSecret_keyInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
