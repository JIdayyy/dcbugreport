import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyBugInput } from "../inputs/CommentCreateManyBugInput";

@TypeGraphQL.InputType("CommentCreateManyBugInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyBugInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyBugInput], {
    nullable: false
  })
  data!: CommentCreateManyBugInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
