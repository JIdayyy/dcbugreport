import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateNestedOneWithoutCommentsInput } from "../inputs/BugCreateNestedOneWithoutCommentsInput";
import { FeatureCreateNestedOneWithoutCommentsInput } from "../inputs/FeatureCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType("CommentCreateWithoutUserInput", {
  isAbstract: true
})
export class CommentCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => FeatureCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  Feature?: FeatureCreateNestedOneWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BugCreateNestedOneWithoutCommentsInput, {
    nullable: true
  })
  Bug?: BugCreateNestedOneWithoutCommentsInput | undefined;
}
