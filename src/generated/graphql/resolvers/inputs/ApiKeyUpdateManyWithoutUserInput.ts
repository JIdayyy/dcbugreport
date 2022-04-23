import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateManyUserInputEnvelope } from "../inputs/ApiKeyCreateManyUserInputEnvelope";
import { ApiKeyCreateOrConnectWithoutUserInput } from "../inputs/ApiKeyCreateOrConnectWithoutUserInput";
import { ApiKeyCreateWithoutUserInput } from "../inputs/ApiKeyCreateWithoutUserInput";
import { ApiKeyScalarWhereInput } from "../inputs/ApiKeyScalarWhereInput";
import { ApiKeyUpdateManyWithWhereWithoutUserInput } from "../inputs/ApiKeyUpdateManyWithWhereWithoutUserInput";
import { ApiKeyUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ApiKeyUpdateWithWhereUniqueWithoutUserInput";
import { ApiKeyUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ApiKeyUpsertWithWhereUniqueWithoutUserInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ApiKeyUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ApiKeyCreateWithoutUserInput], {
    nullable: true
  })
  create?: ApiKeyCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ApiKeyCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereUniqueInput], {
    nullable: true
  })
  set?: ApiKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ApiKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereUniqueInput], {
    nullable: true
  })
  delete?: ApiKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereUniqueInput], {
    nullable: true
  })
  connect?: ApiKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApiKeyScalarWhereInput[] | undefined;
}
