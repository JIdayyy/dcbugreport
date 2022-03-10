import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyUserInputEnvelope } from "../inputs/BugCreateManyUserInputEnvelope";
import { BugCreateOrConnectWithoutUserInput } from "../inputs/BugCreateOrConnectWithoutUserInput";
import { BugCreateWithoutUserInput } from "../inputs/BugCreateWithoutUserInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BugCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BugCreateWithoutUserInput], {
    nullable: true
  })
  create?: BugCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BugCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BugCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  connect?: BugWhereUniqueInput[] | undefined;
}
