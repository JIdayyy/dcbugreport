import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutFeatureInput } from "../inputs/CategoryCreateOrConnectWithoutFeatureInput";
import { CategoryCreateWithoutFeatureInput } from "../inputs/CategoryCreateWithoutFeatureInput";
import { CategoryUpdateWithoutFeatureInput } from "../inputs/CategoryUpdateWithoutFeatureInput";
import { CategoryUpsertWithoutFeatureInput } from "../inputs/CategoryUpsertWithoutFeatureInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutFeatureInput", {
  isAbstract: true
})
export class CategoryUpdateOneRequiredWithoutFeatureInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutFeatureInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutFeatureInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutFeatureInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutFeatureInput, {
    nullable: true
  })
  update?: CategoryUpdateWithoutFeatureInput | undefined;
}
