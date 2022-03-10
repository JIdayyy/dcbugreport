import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutBugInput } from "../inputs/CategoryCreateOrConnectWithoutBugInput";
import { CategoryCreateWithoutBugInput } from "../inputs/CategoryCreateWithoutBugInput";
import { CategoryUpdateWithoutBugInput } from "../inputs/CategoryUpdateWithoutBugInput";
import { CategoryUpsertWithoutBugInput } from "../inputs/CategoryUpsertWithoutBugInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneWithoutBugInput", {
  isAbstract: true
})
export class CategoryUpdateOneWithoutBugInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutBugInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutBugInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutBugInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutBugInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutBugInput, {
    nullable: true
  })
  update?: CategoryUpdateWithoutBugInput | undefined;
}
