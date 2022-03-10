import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugWhereUniqueInput } from "../../../inputs/BugWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBugArgs {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;
}
