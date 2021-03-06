import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureOrderByWithRelationInput } from "../../../inputs/FeatureOrderByWithRelationInput";
import { FeatureWhereInput } from "../../../inputs/FeatureWhereInput";
import { FeatureWhereUniqueInput } from "../../../inputs/FeatureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFeatureArgs {
  @TypeGraphQL.Field(_type => FeatureWhereInput, {
    nullable: true
  })
  where?: FeatureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FeatureOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FeatureOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureWhereUniqueInput, {
    nullable: true
  })
  cursor?: FeatureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
