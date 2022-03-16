import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyFeatureInput } from "../inputs/CommentCreateManyFeatureInput";

@TypeGraphQL.InputType("CommentCreateManyFeatureInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyFeatureInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyFeatureInput], {
    nullable: false
  })
  data!: CommentCreateManyFeatureInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
