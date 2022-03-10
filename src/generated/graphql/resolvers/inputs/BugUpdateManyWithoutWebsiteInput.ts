import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyWebsiteInputEnvelope } from "../inputs/BugCreateManyWebsiteInputEnvelope";
import { BugCreateOrConnectWithoutWebsiteInput } from "../inputs/BugCreateOrConnectWithoutWebsiteInput";
import { BugCreateWithoutWebsiteInput } from "../inputs/BugCreateWithoutWebsiteInput";
import { BugScalarWhereInput } from "../inputs/BugScalarWhereInput";
import { BugUpdateManyWithWhereWithoutWebsiteInput } from "../inputs/BugUpdateManyWithWhereWithoutWebsiteInput";
import { BugUpdateWithWhereUniqueWithoutWebsiteInput } from "../inputs/BugUpdateWithWhereUniqueWithoutWebsiteInput";
import { BugUpsertWithWhereUniqueWithoutWebsiteInput } from "../inputs/BugUpsertWithWhereUniqueWithoutWebsiteInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateManyWithoutWebsiteInput", {
  isAbstract: true
})
export class BugUpdateManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [BugCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: BugCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpsertWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  upsert?: BugUpsertWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => BugCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: BugCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  set?: BugWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BugWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  delete?: BugWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  connect?: BugWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpdateWithWhereUniqueWithoutWebsiteInput], {
    nullable: true
  })
  update?: BugUpdateWithWhereUniqueWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpdateManyWithWhereWithoutWebsiteInput], {
    nullable: true
  })
  updateMany?: BugUpdateManyWithWhereWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BugScalarWhereInput[] | undefined;
}
