import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileScalarWhereInput } from "../inputs/FileScalarWhereInput";
import { FileUpdateManyMutationInput } from "../inputs/FileUpdateManyMutationInput";

@TypeGraphQL.InputType("FileUpdateManyWithWhereWithoutBugInput", {
  isAbstract: true
})
export class FileUpdateManyWithWhereWithoutBugInput {
  @TypeGraphQL.Field(_type => FileScalarWhereInput, {
    nullable: false
  })
  where!: FileScalarWhereInput;

  @TypeGraphQL.Field(_type => FileUpdateManyMutationInput, {
    nullable: false
  })
  data!: FileUpdateManyMutationInput;
}
