import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutNotificationInput } from "../inputs/UserCreateOrConnectWithoutNotificationInput";
import { UserCreateWithoutNotificationInput } from "../inputs/UserCreateWithoutNotificationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotificationInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutNotificationInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutNotificationInput, {
    nullable: true
  })
  create?: UserCreateWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutNotificationInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotificationInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
