import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugOrderByWithRelationInput } from "../../../inputs/BugOrderByWithRelationInput";
import { BugWhereInput } from "../../../inputs/BugWhereInput";
import { BugWhereUniqueInput } from "../../../inputs/BugWhereUniqueInput";
import { BugScalarFieldEnum } from "../../../../enums/BugScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserBugArgs {
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

  @TypeGraphQL.Field(_type => [BugScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "number" | "description" | "status" | "priority" | "severity" | "created_at" | "updated_at" | "userId" | "websiteId" | "validation_status" | "categoryId"> | undefined;
}
