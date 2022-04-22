import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSecret_keyInput } from "../inputs/UserCreateWithoutSecret_keyInput";
import { UserUpdateWithoutSecret_keyInput } from "../inputs/UserUpdateWithoutSecret_keyInput";

@TypeGraphQL.InputType("UserUpsertWithoutSecret_keyInput", {
  isAbstract: true
})
export class UserUpsertWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSecret_keyInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSecret_keyInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSecret_keyInput, {
    nullable: false
  })
  create!: UserCreateWithoutSecret_keyInput;
}
