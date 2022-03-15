import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotificationInput } from "../inputs/UserCreateOrConnectWithoutNotificationInput";
import { UserCreateWithoutNotificationInput } from "../inputs/UserCreateWithoutNotificationInput";
import { UserUpdateWithoutNotificationInput } from "../inputs/UserUpdateWithoutNotificationInput";
import { UserUpsertWithoutNotificationInput } from "../inputs/UserUpsertWithoutNotificationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNotificationInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutNotificationInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutNotificationInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutNotificationInput, {
    nullable: true
  })
  update?: UserUpdateWithoutNotificationInput | undefined;
}
