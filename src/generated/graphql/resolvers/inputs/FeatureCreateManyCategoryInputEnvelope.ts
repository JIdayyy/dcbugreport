import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyCategoryInput } from "../inputs/FeatureCreateManyCategoryInput";

@TypeGraphQL.InputType("FeatureCreateManyCategoryInputEnvelope", {
  isAbstract: true
})
export class FeatureCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [FeatureCreateManyCategoryInput], {
    nullable: false
  })
  data!: FeatureCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
