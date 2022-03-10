import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugScalarWhereInput } from "../inputs/BugScalarWhereInput";
import { BugUpdateManyMutationInput } from "../inputs/BugUpdateManyMutationInput";

@TypeGraphQL.InputType("BugUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class BugUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => BugScalarWhereInput, {
    nullable: false
  })
  where!: BugScalarWhereInput;

  @TypeGraphQL.Field(_type => BugUpdateManyMutationInput, {
    nullable: false
  })
  data!: BugUpdateManyMutationInput;
}
