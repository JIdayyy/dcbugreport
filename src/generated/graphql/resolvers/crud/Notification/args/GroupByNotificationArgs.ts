import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationOrderByWithAggregationInput } from "../../../inputs/NotificationOrderByWithAggregationInput";
import { NotificationScalarWhereWithAggregatesInput } from "../../../inputs/NotificationScalarWhereWithAggregatesInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationScalarFieldEnum } from "../../../../enums/NotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNotificationArgs {
  @TypeGraphQL.Field(_type => NotificationWhereInput, {
    nullable: true
  })
  where?: NotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NotificationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NotificationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "isRead" | "is_disabled" | "created_at" | "updated_at" | "userId" | "senderId" | "bugId" | "topics">;

  @TypeGraphQL.Field(_type => NotificationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NotificationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
