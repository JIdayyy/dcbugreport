import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBugInput } from "../inputs/UserCreateWithoutBugInput";
import { UserUpdateWithoutBugInput } from "../inputs/UserUpdateWithoutBugInput";

@TypeGraphQL.InputType("UserUpsertWithoutBugInput", {
  isAbstract: true
})
export class UserUpsertWithoutBugInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBugInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBugInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBugInput, {
    nullable: false
  })
  create!: UserCreateWithoutBugInput;
}
