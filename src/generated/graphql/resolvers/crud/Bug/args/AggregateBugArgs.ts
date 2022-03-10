import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugOrderByWithRelationInput } from "../../../inputs/BugOrderByWithRelationInput";
import { BugWhereInput } from "../../../inputs/BugWhereInput";
import { BugWhereUniqueInput } from "../../../inputs/BugWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBugArgs {
  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  where?: BugWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BugOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BugOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: true
  })
  cursor?: BugWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
