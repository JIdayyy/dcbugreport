import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyCategoryInputEnvelope } from "../inputs/BugCreateManyCategoryInputEnvelope";
import { BugCreateOrConnectWithoutCategoryInput } from "../inputs/BugCreateOrConnectWithoutCategoryInput";
import { BugCreateWithoutCategoryInput } from "../inputs/BugCreateWithoutCategoryInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateNestedManyWithoutCategoryInput", {
  isAbstract: true
})
export class BugCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [BugCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: BugCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => BugCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: BugCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  connect?: BugWhereUniqueInput[] | undefined;
}
