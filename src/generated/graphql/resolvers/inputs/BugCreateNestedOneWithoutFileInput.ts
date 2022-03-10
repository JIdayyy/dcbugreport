import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateOrConnectWithoutFileInput } from "../inputs/BugCreateOrConnectWithoutFileInput";
import { BugCreateWithoutFileInput } from "../inputs/BugCreateWithoutFileInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateNestedOneWithoutFileInput", {
  isAbstract: true
})
export class BugCreateNestedOneWithoutFileInput {
  @TypeGraphQL.Field(_type => BugCreateWithoutFileInput, {
    nullable: true
  })
  create?: BugCreateWithoutFileInput | undefined;

  @TypeGraphQL.Field(_type => BugCreateOrConnectWithoutFileInput, {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutFileInput | undefined;

  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: true
  })
  connect?: BugWhereUniqueInput | undefined;
}
