import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateOrConnectWithoutCommentsInput } from "../inputs/BugCreateOrConnectWithoutCommentsInput";
import { BugCreateWithoutCommentsInput } from "../inputs/BugCreateWithoutCommentsInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class BugCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => BugCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: BugCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BugCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: true
  })
  connect?: BugWhereUniqueInput | undefined;
}
