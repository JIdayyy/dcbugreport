import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyFeatureInputEnvelope } from "../inputs/CommentCreateManyFeatureInputEnvelope";
import { CommentCreateOrConnectWithoutFeatureInput } from "../inputs/CommentCreateOrConnectWithoutFeatureInput";
import { CommentCreateWithoutFeatureInput } from "../inputs/CommentCreateWithoutFeatureInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutFeatureInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutFeatureInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutFeatureInput], {
    nullable: true
  })
  create?: CommentCreateWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutFeatureInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutFeatureInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyFeatureInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyFeatureInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
