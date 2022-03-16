import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateManyWebsiteInput } from "../inputs/FeatureCreateManyWebsiteInput";

@TypeGraphQL.InputType("FeatureCreateManyWebsiteInputEnvelope", {
  isAbstract: true
})
export class FeatureCreateManyWebsiteInputEnvelope {
  @TypeGraphQL.Field(_type => [FeatureCreateManyWebsiteInput], {
    nullable: false
  })
  data!: FeatureCreateManyWebsiteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
