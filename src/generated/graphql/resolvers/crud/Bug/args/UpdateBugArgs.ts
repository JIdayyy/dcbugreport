import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugUpdateInput } from "../../../inputs/BugUpdateInput";
import { BugWhereUniqueInput } from "../../../inputs/BugWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBugArgs {
  @TypeGraphQL.Field(_type => BugUpdateInput, {
    nullable: false
  })
  data!: BugUpdateInput;

  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;
}
