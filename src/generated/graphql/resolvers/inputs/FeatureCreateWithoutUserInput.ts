import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutFeatureInput } from "../inputs/CategoryCreateNestedOneWithoutFeatureInput";
import { CommentCreateNestedManyWithoutFeatureInput } from "../inputs/CommentCreateNestedManyWithoutFeatureInput";
import { WebsiteCreateNestedOneWithoutFeatureInput } from "../inputs/WebsiteCreateNestedOneWithoutFeatureInput";

@TypeGraphQL.InputType("FeatureCreateWithoutUserInput", {
  isAbstract: true
})
export class FeatureCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => WebsiteCreateNestedOneWithoutFeatureInput, {
    nullable: false
  })
  website!: WebsiteCreateNestedOneWithoutFeatureInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutFeatureInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutFeatureInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutFeatureInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  widgetsId?: string | undefined;
}
