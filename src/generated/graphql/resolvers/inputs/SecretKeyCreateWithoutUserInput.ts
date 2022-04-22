import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateNestedOneWithoutSecret_keyInput } from "../inputs/ApiKeyCreateNestedOneWithoutSecret_keyInput";
import { WebsiteCreateNestedOneWithoutSecret_keyInput } from "../inputs/WebsiteCreateNestedOneWithoutSecret_keyInput";

@TypeGraphQL.InputType("SecretKeyCreateWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => WebsiteCreateNestedOneWithoutSecret_keyInput, {
    nullable: false
  })
  website!: WebsiteCreateNestedOneWithoutSecret_keyInput;

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
