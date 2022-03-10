import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyCategoryInput } from "../inputs/BugCreateManyCategoryInput";

@TypeGraphQL.InputType("BugCreateManyCategoryInputEnvelope", {
  isAbstract: true
})
export class BugCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [BugCreateManyCategoryInput], {
    nullable: false
  })
  data!: BugCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
