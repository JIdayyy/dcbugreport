import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateWithoutBugInput } from "../inputs/FileCreateWithoutBugInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateOrConnectWithoutBugInput", {
  isAbstract: true
})
export class FileCreateOrConnectWithoutBugInput {
  @TypeGraphQL.Field(_type => FileWhereUniqueInput, {
    nullable: false
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field(_type => FileCreateWithoutBugInput, {
    nullable: false
  })
  create!: FileCreateWithoutBugInput;
}
