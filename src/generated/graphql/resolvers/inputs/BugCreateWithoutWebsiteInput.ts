import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateNestedManyWithoutBugInput } from "../inputs/FileCreateNestedManyWithoutBugInput";
import { UserCreateNestedOneWithoutBugInput } from "../inputs/UserCreateNestedOneWithoutBugInput";

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

  @TypeGraphQL.Field(_type => FileCreateNestedManyWithoutBugInput, {
    nullable: true
  })
  File?: FileCreateNestedManyWithoutBugInput | undefined;
}
