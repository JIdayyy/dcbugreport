import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutFeatureInput } from "../inputs/CommentCreateWithoutFeatureInput";
import { CommentUpdateWithoutFeatureInput } from "../inputs/CommentUpdateWithoutFeatureInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutFeatureInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutFeatureInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutFeatureInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutFeatureInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: CommentCreateWithoutFeatureInput;
}
