import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateWithoutCommentsInput } from "../inputs/FeatureCreateWithoutCommentsInput";
import { FeatureUpdateWithoutCommentsInput } from "../inputs/FeatureUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("FeatureUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class FeatureUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => FeatureUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: FeatureUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => FeatureCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: FeatureCreateWithoutCommentsInput;
}
