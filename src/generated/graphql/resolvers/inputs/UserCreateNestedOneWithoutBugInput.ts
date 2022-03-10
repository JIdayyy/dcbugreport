import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBugInput } from "../inputs/UserCreateOrConnectWithoutBugInput";
import { UserCreateWithoutBugInput } from "../inputs/UserCreateWithoutBugInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBugInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBugInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBugInput, {
    nullable: true
  })
  create?: UserCreateWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBugInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
