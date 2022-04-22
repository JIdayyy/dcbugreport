import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateNestedOneWithoutSecret_keyInput } from "../inputs/ApiKeyCreateNestedOneWithoutSecret_keyInput";
import { UserCreateNestedOneWithoutSecret_keyInput } from "../inputs/UserCreateNestedOneWithoutSecret_keyInput";

@TypeGraphQL.InputType("SecretKeyCreateWithoutWebsiteInput", {
  isAbstract: true
})
export class SecretKeyCreateWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSecret_keyInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSecret_keyInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => ApiKeyCreateNestedOneWithoutSecret_keyInput, {
    nullable: false
  })
  api_key!: ApiKeyCreateNestedOneWithoutSecret_keyInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
