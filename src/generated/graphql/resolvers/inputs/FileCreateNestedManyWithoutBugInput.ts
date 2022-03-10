import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCreateManyBugInputEnvelope } from "../inputs/FileCreateManyBugInputEnvelope";
import { FileCreateOrConnectWithoutBugInput } from "../inputs/FileCreateOrConnectWithoutBugInput";
import { FileCreateWithoutBugInput } from "../inputs/FileCreateWithoutBugInput";
import { FileWhereUniqueInput } from "../inputs/FileWhereUniqueInput";

@TypeGraphQL.InputType("FileCreateNestedManyWithoutBugInput", {
  isAbstract: true
})
export class FileCreateNestedManyWithoutBugInput {
  @TypeGraphQL.Field(_type => [FileCreateWithoutBugInput], {
    nullable: true
  })
  create?: FileCreateWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutBugInput], {
    nullable: true
  })
  connectOrCreate?: FileCreateOrConnectWithoutBugInput[] | undefined;

  @TypeGraphQL.Field(_type => FileCreateManyBugInputEnvelope, {
    nullable: true
  })
  createMany?: FileCreateManyBugInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FileWhereUniqueInput], {
    nullable: true
  })
  connect?: FileWhereUniqueInput[] | undefined;
}
