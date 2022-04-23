import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateNestedManyWithoutWebsiteInput } from "../inputs/ApiKeyCreateNestedManyWithoutWebsiteInput";
import { BugCreateNestedManyWithoutWebsiteInput } from "../inputs/BugCreateNestedManyWithoutWebsiteInput";
import { FeatureCreateNestedManyWithoutWebsiteInput } from "../inputs/FeatureCreateNestedManyWithoutWebsiteInput";
import { SecretKeyCreateNestedManyWithoutWebsiteInput } from "../inputs/SecretKeyCreateNestedManyWithoutWebsiteInput";

@TypeGraphQL.InputType("WebsiteCreateInput", {
  isAbstract: true
})
export class WebsiteCreateInput {
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
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  logo!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPreview!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => BugCreateNestedManyWithoutWebsiteInput, {
    nullable: true
  })
  Bug?: BugCreateNestedManyWithoutWebsiteInput | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateNestedManyWithoutWebsiteInput, {
    nullable: true
  })
  Feature?: FeatureCreateNestedManyWithoutWebsiteInput | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCreateNestedManyWithoutWebsiteInput, {
    nullable: true
  })
  ApiKey?: ApiKeyCreateNestedManyWithoutWebsiteInput | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateNestedManyWithoutWebsiteInput, {
    nullable: true
  })
  secret_key?: SecretKeyCreateNestedManyWithoutWebsiteInput | undefined;
}
