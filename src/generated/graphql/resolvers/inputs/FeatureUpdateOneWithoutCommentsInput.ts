import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FeatureCreateOrConnectWithoutCommentsInput } from "../inputs/FeatureCreateOrConnectWithoutCommentsInput";
import { FeatureCreateWithoutCommentsInput } from "../inputs/FeatureCreateWithoutCommentsInput";
import { FeatureUpdateWithoutCommentsInput } from "../inputs/FeatureUpdateWithoutCommentsInput";
import { FeatureUpsertWithoutCommentsInput } from "../inputs/FeatureUpsertWithoutCommentsInput";
import { FeatureWhereUniqueInput } from "../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.InputType("FeatureUpdateOneWithoutCommentsInput", {
  isAbstract: true
})
export class FeatureUpdateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => FeatureCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: FeatureCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => FeatureCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: FeatureCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => FeatureUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: FeatureUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: true
  })
  connect?: FeatureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FeatureUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: FeatureUpdateWithoutCommentsInput | undefined;
}
