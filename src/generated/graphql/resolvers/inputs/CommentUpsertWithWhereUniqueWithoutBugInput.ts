import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutBugInput } from "../inputs/CommentCreateWithoutBugInput";
import { CommentUpdateWithoutBugInput } from "../inputs/CommentUpdateWithoutBugInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutBugInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutBugInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutBugInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutBugInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutBugInput, {
    nullable: false
  })
  create!: CommentCreateWithoutBugInput;
}
