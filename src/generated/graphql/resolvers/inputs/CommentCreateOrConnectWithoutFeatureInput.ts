import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutFeatureInput } from "../inputs/CommentCreateWithoutFeatureInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutFeatureInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutFeatureInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: CommentCreateWithoutFeatureInput;
}
