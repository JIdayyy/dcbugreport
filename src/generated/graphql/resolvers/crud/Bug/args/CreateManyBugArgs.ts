import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugCreateManyInput } from "../../../inputs/BugCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBugArgs {
  @TypeGraphQL.Field(_type => [BugCreateManyInput], {
    nullable: false
  })
  data!: BugCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
