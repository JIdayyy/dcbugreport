import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutBugInput } from "../inputs/CategoryCreateNestedOneWithoutBugInput";
import { CommentCreateNestedManyWithoutBugInput } from "../inputs/CommentCreateNestedManyWithoutBugInput";
import { UserCreateNestedOneWithoutBugInput } from "../inputs/UserCreateNestedOneWithoutBugInput";
import { WebsiteCreateNestedOneWithoutBugInput } from "../inputs/WebsiteCreateNestedOneWithoutBugInput";
import { BugPriority } from "../../enums/BugPriority";
import { BugSeverity } from "../../enums/BugSeverity";
import { BugStatus } from "../../enums/BugStatus";
import { ValidationStatus } from "../../enums/ValidationStatus";

@TypeGraphQL.InputType("BugCreateWithoutFileInput", {
  isAbstract: true
})
export class BugCreateWithoutFileInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  number?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => BugStatus, {
    nullable: true
  })
  status?: "OPEN" | "IN_PROGRESS" | "CLOSED" | undefined;

  @TypeGraphQL.Field(_type => BugPriority, {
    nullable: true
  })
  priority?: "LOW" | "MEDIUM" | "HIGH" | undefined;

  @TypeGraphQL.Field(_type => BugSeverity, {
    nullable: false
  })
  severity!: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBugInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBugInput;

  @TypeGraphQL.Field(_type => WebsiteCreateNestedOneWithoutBugInput, {
    nullable: false
  })
  Website!: WebsiteCreateNestedOneWithoutBugInput;

  @TypeGraphQL.Field(_type => ValidationStatus, {
    nullable: true
  })
  validation_status?: "VALIDATED" | "NOT_VALIDATED" | "PENDING" | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutBugInput, {
    nullable: true
  })
  Category?: CategoryCreateNestedOneWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutBugInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutBugInput | undefined;
}
