import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WebsiteCreateOrConnectWithoutFeatureInput } from "../inputs/WebsiteCreateOrConnectWithoutFeatureInput";
import { WebsiteCreateWithoutFeatureInput } from "../inputs/WebsiteCreateWithoutFeatureInput";
import { WebsiteUpdateWithoutFeatureInput } from "../inputs/WebsiteUpdateWithoutFeatureInput";
import { WebsiteUpsertWithoutFeatureInput } from "../inputs/WebsiteUpsertWithoutFeatureInput";
import { WebsiteWhereUniqueInput } from "../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.InputType("WebsiteUpdateOneRequiredWithoutFeatureInput", {
  isAbstract: true
})
export class WebsiteUpdateOneRequiredWithoutFeatureInput {
  @TypeGraphQL.Field(_type => WebsiteCreateWithoutFeatureInput, {
    nullable: true
  })
  create?: WebsiteCreateWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteCreateOrConnectWithoutFeatureInput, {
    nullable: true
  })
  connectOrCreate?: WebsiteCreateOrConnectWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpsertWithoutFeatureInput, {
    nullable: true
  })
  upsert?: WebsiteUpsertWithoutFeatureInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: true
  })
  connect?: WebsiteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => WebsiteUpdateWithoutFeatureInput, {
    nullable: true
  })
  update?: WebsiteUpdateWithoutFeatureInput | undefined;
}
