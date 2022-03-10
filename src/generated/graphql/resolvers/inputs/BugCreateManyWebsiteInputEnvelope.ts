import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyWebsiteInput } from "../inputs/BugCreateManyWebsiteInput";

@TypeGraphQL.InputType("BugCreateManyWebsiteInputEnvelope", {
  isAbstract: true
})
export class BugCreateManyWebsiteInputEnvelope {
  @TypeGraphQL.Field(_type => [BugCreateManyWebsiteInput], {
    nullable: false
  })
  data!: BugCreateManyWebsiteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
