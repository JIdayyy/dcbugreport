import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateWithoutWebsiteInput } from "../inputs/BugCreateWithoutWebsiteInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateOrConnectWithoutWebsiteInput", {
  isAbstract: true
})
export class BugCreateOrConnectWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: BugCreateWithoutWebsiteInput;
}
