import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyUserInputEnvelope } from "../inputs/BugCreateManyUserInputEnvelope";
import { BugCreateOrConnectWithoutUserInput } from "../inputs/BugCreateOrConnectWithoutUserInput";
import { BugCreateWithoutUserInput } from "../inputs/BugCreateWithoutUserInput";
import { BugScalarWhereInput } from "../inputs/BugScalarWhereInput";
import { BugUpdateManyWithWhereWithoutUserInput } from "../inputs/BugUpdateManyWithWhereWithoutUserInput";
import { BugUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BugUpdateWithWhereUniqueWithoutUserInput";
import { BugUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BugUpsertWithWhereUniqueWithoutUserInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class BugUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BugCreateWithoutUserInput], {
    nullable: true
  })
  create?: BugCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BugUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BugCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BugCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BugUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BugUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BugUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BugScalarWhereInput[] | undefined;
}
