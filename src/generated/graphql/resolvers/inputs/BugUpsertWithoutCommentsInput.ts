import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutCommentsInput } from "../inputs/BugCreateWithoutCommentsInput";
import { BugUpdateWithoutCommentsInput } from "../inputs/BugUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("BugUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class BugUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => BugUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: BugUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: BugCreateWithoutCommentsInput;
}
