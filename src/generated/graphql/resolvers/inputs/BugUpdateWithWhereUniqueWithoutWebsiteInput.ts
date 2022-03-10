import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugUpdateWithoutWebsiteInput } from "../inputs/BugUpdateWithoutWebsiteInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class BugUpdateWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugUpdateWithoutWebsiteInput, {
    nullable: false
  })
  data!: BugUpdateWithoutWebsiteInput;
}
