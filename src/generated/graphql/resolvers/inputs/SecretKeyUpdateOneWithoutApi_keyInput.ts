import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateOrConnectWithoutApi_keyInput } from "../inputs/SecretKeyCreateOrConnectWithoutApi_keyInput";
import { SecretKeyCreateWithoutApi_keyInput } from "../inputs/SecretKeyCreateWithoutApi_keyInput";
import { SecretKeyUpdateWithoutApi_keyInput } from "../inputs/SecretKeyUpdateWithoutApi_keyInput";
import { SecretKeyUpsertWithoutApi_keyInput } from "../inputs/SecretKeyUpsertWithoutApi_keyInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpdateOneWithoutApi_keyInput", {
  isAbstract: true
})
export class SecretKeyUpdateOneWithoutApi_keyInput {
  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutApi_keyInput, {
    nullable: true
  })
  create?: SecretKeyCreateWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateOrConnectWithoutApi_keyInput, {
    nullable: true
  })
  connectOrCreate?: SecretKeyCreateOrConnectWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyUpsertWithoutApi_keyInput, {
    nullable: true
  })
  upsert?: SecretKeyUpsertWithoutApi_keyInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: true
  })
  connect?: SecretKeyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyUpdateWithoutApi_keyInput, {
    nullable: true
  })
  update?: SecretKeyUpdateWithoutApi_keyInput | undefined;
}
