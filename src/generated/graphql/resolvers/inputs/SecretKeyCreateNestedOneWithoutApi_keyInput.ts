import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateOrConnectWithoutApi_keyInput } from "../inputs/SecretKeyCreateOrConnectWithoutApi_keyInput";
import { SecretKeyCreateWithoutApi_keyInput } from "../inputs/SecretKeyCreateWithoutApi_keyInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyCreateNestedOneWithoutApi_keyInput", {
  isAbstract: true
})
export class SecretKeyCreateNestedOneWithoutApi_keyInput {
  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutApi_keyInput, {
    nullable: true
  })
  create?: SecretKeyCreateWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateOrConnectWithoutApi_keyInput, {
    nullable: true
  })
  connectOrCreate?: SecretKeyCreateOrConnectWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: true
  })
  connect?: SecretKeyWhereUniqueInput | undefined;
}
