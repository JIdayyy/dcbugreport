import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateNestedOneWithoutApi_keyInput } from "../inputs/SecretKeyCreateNestedOneWithoutApi_keyInput";
import { UserCreateNestedOneWithoutKeysInput } from "../inputs/UserCreateNestedOneWithoutKeysInput";

@TypeGraphQL.InputType("ApiKeyCreateWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyCreateWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutKeysInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutKeysInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateNestedOneWithoutApi_keyInput, {
    nullable: true
  })
  secret_key?: SecretKeyCreateNestedOneWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  secretKeyId?: string | undefined;
}
