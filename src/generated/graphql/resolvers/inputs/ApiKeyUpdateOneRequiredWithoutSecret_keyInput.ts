import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateOrConnectWithoutSecret_keyInput } from "../inputs/ApiKeyCreateOrConnectWithoutSecret_keyInput";
import { ApiKeyCreateWithoutSecret_keyInput } from "../inputs/ApiKeyCreateWithoutSecret_keyInput";
import { ApiKeyUpdateWithoutSecret_keyInput } from "../inputs/ApiKeyUpdateWithoutSecret_keyInput";
import { ApiKeyUpsertWithoutSecret_keyInput } from "../inputs/ApiKeyUpsertWithoutSecret_keyInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpdateOneRequiredWithoutSecret_keyInput", {
  isAbstract: true
})
export class ApiKeyUpdateOneRequiredWithoutSecret_keyInput {
  @TypeGraphQL.Field(_type => ApiKeyCreateWithoutSecret_keyInput, {
    nullable: true
  })
  create?: ApiKeyCreateWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCreateOrConnectWithoutSecret_keyInput, {
    nullable: true
  })
  connectOrCreate?: ApiKeyCreateOrConnectWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyUpsertWithoutSecret_keyInput, {
    nullable: true
  })
  upsert?: ApiKeyUpsertWithoutSecret_keyInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyWhereUniqueInput, {
    nullable: true
  })
  connect?: ApiKeyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyUpdateWithoutSecret_keyInput, {
    nullable: true
  })
  update?: ApiKeyUpdateWithoutSecret_keyInput | undefined;
}
