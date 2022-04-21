/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  UserCreateNestedOneWithoutBugInput,
  FileCreateNestedManyWithoutBugInput,
  CategoryCreateNestedOneWithoutBugInput,
  CommentCreateNestedManyWithoutBugInput,
  WebsiteCreateNestedOneWithoutBugInput,
  BugSeverity,
  BugPriority,
  ValidationStatus,
  BugStatus,
} from '../../generated/graphql';

import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('CreateBugFromWidgetInputs', {
  isAbstract: true,
})
export class CreateBugFromWidgetInputs {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  number?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  description!: string;

  @TypeGraphQL.Field((_type) => BugStatus, {
    nullable: true,
  })
  status?: 'OPEN' | 'IN_PROGRESS' | 'CLOSED' | undefined;

  @TypeGraphQL.Field((_type) => BugPriority, {
    nullable: true,
  })
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | undefined;

  @TypeGraphQL.Field((_type) => BugSeverity, {
    nullable: false,
  })
  severity!: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutBugInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutBugInput;

  @TypeGraphQL.Field((_type) => WebsiteCreateNestedOneWithoutBugInput, {
    nullable: false,
  })
  Website!: WebsiteCreateNestedOneWithoutBugInput;

  @TypeGraphQL.Field((_type) => ValidationStatus, {
    nullable: true,
  })
  validation_status?: 'VALIDATED' | 'NOT_VALIDATED' | 'PENDING' | undefined;

  @TypeGraphQL.Field((_type) => FileCreateNestedManyWithoutBugInput, {
    nullable: true,
  })
  File?: FileCreateNestedManyWithoutBugInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateNestedOneWithoutBugInput, {
    nullable: true,
  })
  Category?: CategoryCreateNestedOneWithoutBugInput | undefined;

  @TypeGraphQL.Field((_type) => CommentCreateNestedManyWithoutBugInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutBugInput | undefined;
}
