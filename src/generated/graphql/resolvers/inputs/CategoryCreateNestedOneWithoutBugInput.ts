import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutBugInput } from "../inputs/CategoryCreateOrConnectWithoutBugInput";
import { CategoryCreateWithoutBugInput } from "../inputs/CategoryCreateWithoutBugInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutBugInput", {
  isAbstract: true
})
export class CategoryCreateNestedOneWithoutBugInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutBugInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutBugInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
