import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateNestedManyWithoutBugInput } from "../inputs/FileCreateNestedManyWithoutBugInput";
import { UserCreateNestedOneWithoutBugInput } from "../inputs/UserCreateNestedOneWithoutBugInput";
import { WebsiteCreateNestedOneWithoutBugInput } from "../inputs/WebsiteCreateNestedOneWithoutBugInput";

@TypeGraphQL.InputType("BugCreateInput", {
  isAbstract: true
})
export class BugCreateInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  priority!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  severity!: string;

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
    nullable: true
  })
  Website?: WebsiteCreateNestedOneWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutBugInput, {
    nullable: true
  })
  File?: FileCreateNestedManyWithoutBugInput | undefined;
}
