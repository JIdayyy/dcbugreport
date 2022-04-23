import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateManyWebsiteInputEnvelope } from "../inputs/ApiKeyCreateManyWebsiteInputEnvelope";
import { ApiKeyCreateOrConnectWithoutWebsiteInput } from "../inputs/ApiKeyCreateOrConnectWithoutWebsiteInput";
import { ApiKeyCreateWithoutWebsiteInput } from "../inputs/ApiKeyCreateWithoutWebsiteInput";
import { ApiKeyScalarWhereInput } from "../inputs/ApiKeyScalarWhereInput";
import { ApiKeyUpdateManyWithWhereWithoutWebsiteInput } from "../inputs/ApiKeyUpdateManyWithWhereWithoutWebsiteInput";
import { ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput } from "../inputs/ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput";
import { ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput } from "../inputs/ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyUpdateManyWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyUpdateManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [ApiKeyCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: ApiKeyCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: ApiKeyCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  upsert?: ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: ApiKeyCreateManyWebsiteInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  update?: ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyUpdateManyWithWhereWithoutWebsiteInput], {
    nullable: true
  })
  updateMany?: ApiKeyUpdateManyWithWhereWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApiKeyScalarWhereInput[] | undefined;
}
