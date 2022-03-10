import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugUpdateManyMutationInput } from "../../../inputs/BugUpdateManyMutationInput";
import { BugWhereInput } from "../../../inputs/BugWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBugArgs {
  @TypeGraphQL.Field(_type => BugUpdateManyMutationInput, {
    nullable: false
  })
  data!: BugUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  where?: BugWhereInput | undefined;
}
