import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugWhereInput } from "../../../inputs/BugWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBugArgs {
  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  where?: BugWhereInput | undefined;
}
