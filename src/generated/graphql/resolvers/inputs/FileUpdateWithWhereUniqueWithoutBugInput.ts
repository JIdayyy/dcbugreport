import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileUpdateWithoutBugInput } from "../inputs/FileUpdateWithoutBugInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutBugInput", {
  isAbstract: true
})
export class FileUpdateWithWhereUniqueWithoutBugInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileUpdateWithoutBugInput, {
    nullable: false
  })
  data!: FileUpdateWithoutBugInput;
}
