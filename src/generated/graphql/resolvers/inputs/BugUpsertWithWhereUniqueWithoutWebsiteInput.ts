import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutWebsiteInput } from "../inputs/BugCreateWithoutWebsiteInput";
import { BugUpdateWithoutWebsiteInput } from "../inputs/BugUpdateWithoutWebsiteInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpsertWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class BugUpsertWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugUpdateWithoutWebsiteInput, {
    nullable: false
  })
  update!: BugUpdateWithoutWebsiteInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: BugCreateWithoutWebsiteInput;
}
