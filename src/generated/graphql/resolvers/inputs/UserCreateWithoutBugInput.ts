import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutUserInput } from "../inputs/CommentCreateNestedManyWithoutUserInput";
import { FeatureCreateNestedManyWithoutUserInput } from "../inputs/FeatureCreateNestedManyWithoutUserInput";
import { FileCreateNestedManyWithoutUserInput } from "../inputs/FileCreateNestedManyWithoutUserInput";
import { NotificationCreateNestedManyWithoutSenderInput } from "../inputs/NotificationCreateNestedManyWithoutSenderInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";

@TypeGraphQL.InputType("UserCreateWithoutBugInput", {
  isAbstract: true
})
export class UserCreateWithoutBugInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateroleInput, {
    nullable: true
  })
  role?: UserCreateroleInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  files?: FileCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Notification?: NotificationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  notifications_sent?: NotificationCreateNestedManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  Comment?: CommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  feature?: FeatureCreateNestedManyWithoutUserInput | undefined;
}
