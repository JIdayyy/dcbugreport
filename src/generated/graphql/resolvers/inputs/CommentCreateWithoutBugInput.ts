import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateNestedOneWithoutCommentsInput } from "../inputs/FeatureCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutCommentInput } from "../inputs/UserCreateNestedOneWithoutCommentInput";

@TypeGraphQL.InputType("CommentCreateWithoutBugInput", {
  isAbstract: true
})
export class CommentCreateWithoutBugInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCommentInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fileId!: string;

  @TypeGraphQL.Field(_type => FeatureCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  Feature?: FeatureCreateNestedOneWithoutCommentsInput | undefined;
}
