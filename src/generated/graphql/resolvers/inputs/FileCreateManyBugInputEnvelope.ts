import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyBugInput } from "../inputs/FileCreateManyBugInput";

@TypeGraphQL.InputType("FileCreateManyBugInputEnvelope", {
  isAbstract: true
})
export class FileCreateManyBugInputEnvelope {
  @TypeGraphQL.Field(_type => [FileCreateManyBugInput], {
    nullable: false
  })
  data!: FileCreateManyBugInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
