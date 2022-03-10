import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyCategoryInputEnvelope } from "../inputs/BugCreateManyCategoryInputEnvelope";
import { BugCreateOrConnectWithoutCategoryInput } from "../inputs/BugCreateOrConnectWithoutCategoryInput";
import { BugCreateWithoutCategoryInput } from "../inputs/BugCreateWithoutCategoryInput";
import { BugScalarWhereInput } from "../inputs/BugScalarWhereInput";
import { BugUpdateManyWithWhereWithoutCategoryInput } from "../inputs/BugUpdateManyWithWhereWithoutCategoryInput";
import { BugUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/BugUpdateWithWhereUniqueWithoutCategoryInput";
import { BugUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/BugUpsertWithWhereUniqueWithoutCategoryInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateManyWithoutCategoryInput", {
  isAbstract: true
})
export class BugUpdateManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [BugCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: BugCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: BugUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => BugCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: BugCreateManyCategoryInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BugUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: BugUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: BugUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BugScalarWhereInput[] | undefined;
}
