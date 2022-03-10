import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyUserInput } from "../inputs/BugCreateManyUserInput";

@TypeGraphQL.InputType("BugCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BugCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BugCreateManyUserInput], {
    nullable: false
  })
  data!: BugCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
