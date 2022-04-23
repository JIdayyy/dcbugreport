import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutKeysInput } from "../inputs/UserCreateWithoutKeysInput";
import { UserUpdateWithoutKeysInput } from "../inputs/UserUpdateWithoutKeysInput";

@TypeGraphQL.InputType("UserUpsertWithoutKeysInput", {
  isAbstract: true
})
export class UserUpsertWithoutKeysInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutKeysInput, {
    nullable: false
  })
  update!: UserUpdateWithoutKeysInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutKeysInput, {
    nullable: false
  })
  create!: UserCreateWithoutKeysInput;
}
