import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSecret_keyInput } from "../inputs/UserCreateWithoutSecret_keyInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSecret_keyInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSecret_keyInput, {
    nullable: false
  })
  create!: UserCreateWithoutSecret_keyInput;
}
