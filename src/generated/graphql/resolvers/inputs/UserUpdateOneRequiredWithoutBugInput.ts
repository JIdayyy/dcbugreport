import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBugInput } from "../inputs/UserCreateOrConnectWithoutBugInput";
import { UserCreateWithoutBugInput } from "../inputs/UserCreateWithoutBugInput";
import { UserUpdateWithoutBugInput } from "../inputs/UserUpdateWithoutBugInput";
import { UserUpsertWithoutBugInput } from "../inputs/UserUpsertWithoutBugInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBugInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBugInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBugInput, {
    nullable: true
  })
  create?: UserCreateWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBugInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBugInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBugInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBugInput | undefined;
}
