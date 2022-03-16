import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyUserInput } from "../inputs/FeatureCreateManyUserInput";

@TypeGraphQL.InputType("FeatureCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class FeatureCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FeatureCreateManyUserInput], {
    nullable: false
  })
  data!: FeatureCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
