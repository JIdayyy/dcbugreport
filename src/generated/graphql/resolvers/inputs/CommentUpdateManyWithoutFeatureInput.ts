import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyFeatureInputEnvelope } from "../inputs/CommentCreateManyFeatureInputEnvelope";
import { CommentCreateOrConnectWithoutFeatureInput } from "../inputs/CommentCreateOrConnectWithoutFeatureInput";
import { CommentCreateWithoutFeatureInput } from "../inputs/CommentCreateWithoutFeatureInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutFeatureInput } from "../inputs/CommentUpdateManyWithWhereWithoutFeatureInput";
import { CommentUpdateWithWhereUniqueWithoutFeatureInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutFeatureInput";
import { CommentUpsertWithWhereUniqueWithoutFeatureInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutFeatureInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutFeatureInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutFeatureInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutFeatureInput], {
    nullable: true
  })
  create?: CommentCreateWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutFeatureInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutFeatureInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyFeatureInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyFeatureInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutFeatureInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutFeatureInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
