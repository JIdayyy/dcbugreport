import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutFeatureInput } from "../inputs/CategoryCreateWithoutFeatureInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutFeatureInput", {
  isAbstract: true
})
export class CategoryCreateOrConnectWithoutFeatureInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutFeatureInput;
}
