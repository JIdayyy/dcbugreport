import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutBugInput } from "../inputs/FileCreateWithoutBugInput";
import { FileUpdateWithoutBugInput } from "../inputs/FileUpdateWithoutBugInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutBugInput", {
  isAbstract: true
})
export class FileUpsertWithWhereUniqueWithoutBugInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutBugInput, {
    nullable: false
  })
  update!: FileUpdateWithoutBugInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutBugInput, {
    nullable: false
  })
  create!: FileCreateWithoutBugInput;
}
