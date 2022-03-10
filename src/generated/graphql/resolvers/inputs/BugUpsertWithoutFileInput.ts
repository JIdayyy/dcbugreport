import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutFileInput } from "../inputs/BugCreateWithoutFileInput";
import { BugUpdateWithoutFileInput } from "../inputs/BugUpdateWithoutFileInput";

@TypeGraphQL.InputType("BugUpsertWithoutFileInput", {
  isAbstract: true
})
export class BugUpsertWithoutFileInput {
  @TypeGraphQL.Field(_type => BugUpdateWithoutFileInput, {
    nullable: false
  })
  update!: BugUpdateWithoutFileInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutFileInput, {
    nullable: false
  })
  create!: BugCreateWithoutFileInput;
}
