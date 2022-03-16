import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutFeatureInput } from "../inputs/CategoryCreateOrConnectWithoutFeatureInput";
import { CategoryCreateWithoutFeatureInput } from "../inputs/CategoryCreateWithoutFeatureInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutFeatureInput", {
  isAbstract: true
})
export class CategoryCreateNestedOneWithoutFeatureInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutFeatureInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutFeatureInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
