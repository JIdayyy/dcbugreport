import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManytopicsInput } from "../inputs/NotificationCreateManytopicsInput";

@TypeGraphQL.InputType("NotificationCreateManyInput", {
  isAbstract: true
})
export class NotificationCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senderId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bugId?: string | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManytopicsInput, {
    nullable: true
  })
  topics?: NotificationCreateManytopicsInput | undefined;
}
