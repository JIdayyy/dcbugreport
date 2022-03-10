import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutFileInput } from "../inputs/BugCreateWithoutFileInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateOrConnectWithoutFileInput", {
  isAbstract: true
})
export class BugCreateOrConnectWithoutFileInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutFileInput, {
    nullable: false
  })
  create!: BugCreateWithoutFileInput;
}
