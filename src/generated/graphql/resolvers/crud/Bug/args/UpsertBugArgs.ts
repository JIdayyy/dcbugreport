import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugCreateInput } from "../../../inputs/BugCreateInput";
import { BugUpdateInput } from "../../../inputs/BugUpdateInput";
import { BugWhereUniqueInput } from "../../../inputs/BugWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBugArgs {
  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: false
  })
  where!: BugWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugCreateInput, {
    nullable: false
  })
  create!: BugCreateInput;

  @TypeGraphQL.Field(_type => BugUpdateInput, {
    nullable: false
  })
  update!: BugUpdateInput;
}
