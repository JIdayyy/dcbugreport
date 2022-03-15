import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutNotificationInput } from "../inputs/UserCreateWithoutNotificationInput";
import { UserUpdateWithoutNotificationInput } from "../inputs/UserUpdateWithoutNotificationInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotificationInput", {
  isAbstract: true
})
export class UserUpsertWithoutNotificationInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutNotificationInput, {
    nullable: false
  })
  update!: UserUpdateWithoutNotificationInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationInput, {
    nullable: false
  })
  create!: UserCreateWithoutNotificationInput;
}
