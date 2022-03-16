import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureScalarWhereInput } from "../inputs/FeatureScalarWhereInput";
import { FeatureUpdateManyMutationInput } from "../inputs/FeatureUpdateManyMutationInput";

@TypeGraphQL.InputType("FeatureUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class FeatureUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => FeatureScalarWhereInput, {
    nullable: false
  })
  where!: FeatureScalarWhereInput;

  @TypeGraphQL.Field(_type => FeatureUpdateManyMutationInput, {
    nullable: false
  })
  data!: FeatureUpdateManyMutationInput;
}
