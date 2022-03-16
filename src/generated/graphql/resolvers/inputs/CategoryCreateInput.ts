import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateNestedManyWithoutCategoryInput } from "../inputs/BugCreateNestedManyWithoutCategoryInput";
import { FeatureCreateNestedManyWithoutCategoryInput } from "../inputs/FeatureCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateInput", {
  isAbstract: true
})
export class CategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_disabled!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => BugCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  Bug?: BugCreateNestedManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  backgroundColor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  Feature?: FeatureCreateNestedManyWithoutCategoryInput | undefined;
}
