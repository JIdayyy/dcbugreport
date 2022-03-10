import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyBugInputEnvelope } from "../inputs/FileCreateManyBugInputEnvelope";
import { FileCreateOrConnectWithoutBugInput } from "../inputs/FileCreateOrConnectWithoutBugInput";
import { FileCreateWithoutBugInput } from "../inputs/FileCreateWithoutBugInput";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyWithWhereWithoutBugInput } from "../inputs/FileUpdateManyWithWhereWithoutBugInput";
import { FileUpdateWithWhereUniqueWithoutBugInput } from "../inputs/FileUpdateWithWhereUniqueWithoutBugInput";
import { FileUpsertWithWhereUniqueWithoutBugInput } from "../inputs/FileUpsertWithWhereUniqueWithoutBugInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateManyWithoutBugInput", {
  isAbstract: true
})
export class FileUpdateManyWithoutBugInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutBugInput], {
    nullable: true
  })
  create?: FileCreateWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutBugInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpsertWithWhereUniqueWithoutBugInput], {
    nullable: true
  })
  upsert?: FileUpsertWithWhereUniqueWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyBugInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyBugInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  set?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  delete?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateWithWhereUniqueWithoutBugInput], {
    nullable: true
  })
  update?: FileUpdateWithWhereUniqueWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileUpdateManyWithWhereWithoutBugInput], {
    nullable: true
  })
  updateMany?: FileUpdateManyWithWhereWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FileScalarWhereInput[] | undefined;
}
