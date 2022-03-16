import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyBugInputEnvelope } from "../inputs/CommentCreateManyBugInputEnvelope";
import { CommentCreateOrConnectWithoutBugInput } from "../inputs/CommentCreateOrConnectWithoutBugInput";
import { CommentCreateWithoutBugInput } from "../inputs/CommentCreateWithoutBugInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutBugInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutBugInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutBugInput], {
    nullable: true
  })
  create?: CommentCreateWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutBugInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyBugInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyBugInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
