import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateManyUserInputEnvelope } from "../inputs/SecretKeyCreateManyUserInputEnvelope";
import { SecretKeyCreateOrConnectWithoutUserInput } from "../inputs/SecretKeyCreateOrConnectWithoutUserInput";
import { SecretKeyCreateWithoutUserInput } from "../inputs/SecretKeyCreateWithoutUserInput";
import { SecretKeyScalarWhereInput } from "../inputs/SecretKeyScalarWhereInput";
import { SecretKeyUpdateManyWithWhereWithoutUserInput } from "../inputs/SecretKeyUpdateManyWithWhereWithoutUserInput";
import { SecretKeyUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SecretKeyUpdateWithWhereUniqueWithoutUserInput";
import { SecretKeyUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SecretKeyUpsertWithWhereUniqueWithoutUserInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SecretKeyCreateWithoutUserInput], {
    nullable: true
  })
  create?: SecretKeyCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SecretKeyCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SecretKeyUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SecretKeyCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereUniqueInput], {
    nullable: true
  })
  set?: SecretKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SecretKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereUniqueInput], {
    nullable: true
  })
  delete?: SecretKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereUniqueInput], {
    nullable: true
  })
  connect?: SecretKeyWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SecretKeyUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SecretKeyUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SecretKeyScalarWhereInput[] | undefined;
}
