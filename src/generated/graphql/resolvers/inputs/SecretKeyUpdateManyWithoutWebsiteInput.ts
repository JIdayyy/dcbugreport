import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateManyWebsiteInputEnvelope } from "../inputs/SecretKeyCreateManyWebsiteInputEnvelope";
import { SecretKeyCreateOrConnectWithoutWebsiteInput } from "../inputs/SecretKeyCreateOrConnectWithoutWebsiteInput";
import { SecretKeyCreateWithoutWebsiteInput } from "../inputs/SecretKeyCreateWithoutWebsiteInput";
import { SecretKeyScalarWhereInput } from "../inputs/SecretKeyScalarWhereInput";
import { SecretKeyUpdateManyWithWhereWithoutWebsiteInput } from "../inputs/SecretKeyUpdateManyWithWhereWithoutWebsiteInput";
import { SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput } from "../inputs/SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput";
import { SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput } from "../inputs/SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpdateManyWithoutWebsiteInput", {
  isAbstract: true
})
export class SecretKeyUpdateManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [SecretKeyCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: SecretKeyCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: SecretKeyCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  upsert?: SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: SecretKeyCreateManyWebsiteInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  update?: SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyUpdateManyWithWhereWithoutWebsiteInput], {
    nullable: true
  })
  updateMany?: SecretKeyUpdateManyWithWhereWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SecretKeyScalarWhereInput[] | undefined;
}
