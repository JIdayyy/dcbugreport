import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyBugInputEnvelope } from "../inputs/CommentCreateManyBugInputEnvelope";
import { CommentCreateOrConnectWithoutBugInput } from "../inputs/CommentCreateOrConnectWithoutBugInput";
import { CommentCreateWithoutBugInput } from "../inputs/CommentCreateWithoutBugInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutBugInput } from "../inputs/CommentUpdateManyWithWhereWithoutBugInput";
import { CommentUpdateWithWhereUniqueWithoutBugInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutBugInput";
import { CommentUpsertWithWhereUniqueWithoutBugInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutBugInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutBugInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutBugInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutBugInput], {
    nullable: true
  })
  create?: CommentCreateWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutBugInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutBugInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyBugInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyBugInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutBugInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutBugInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
