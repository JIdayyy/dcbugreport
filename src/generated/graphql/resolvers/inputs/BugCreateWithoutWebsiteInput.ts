import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutBugInput } from "../inputs/CategoryCreateNestedOneWithoutBugInput";
import { FileCreateNestedManyWithoutBugInput } from "../inputs/FileCreateNestedManyWithoutBugInput";
import { UserCreateNestedOneWithoutBugInput } from "../inputs/UserCreateNestedOneWithoutBugInput";
import { BugPriority } from "../../enums/BugPriority";
import { BugSeverity } from "../../enums/BugSeverity";
import { BugStatus } from "../../enums/BugStatus";

@TypeGraphQL.InputType("BugCreateWithoutWebsiteInput", {
  isAbstract: true
})
export class BugCreateWithoutWebsiteInput {
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

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutBugInput, {
    nullable: true
  })
  File?: FileCreateNestedManyWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutBugInput, {
    nullable: true
  })
  Category?: CategoryCreateNestedOneWithoutBugInput | undefined;
}
