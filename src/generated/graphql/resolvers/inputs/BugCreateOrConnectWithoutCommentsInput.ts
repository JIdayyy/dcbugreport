import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutCommentsInput } from "../inputs/BugCreateWithoutCommentsInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class BugCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: BugCreateWithoutCommentsInput;
}
