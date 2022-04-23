import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugCreateInput } from "../../../inputs/BugCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBugArgs {
  @TypeGraphQL.Field(_type => BugCreateInput, {
    nullable: false
  })
  data!: BugCreateInput;
}
