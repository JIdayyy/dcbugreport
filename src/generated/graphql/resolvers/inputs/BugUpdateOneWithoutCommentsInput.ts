import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateOrConnectWithoutCommentsInput } from "../inputs/BugCreateOrConnectWithoutCommentsInput";
import { BugCreateWithoutCommentsInput } from "../inputs/BugCreateWithoutCommentsInput";
import { BugUpdateWithoutCommentsInput } from "../inputs/BugUpdateWithoutCommentsInput";
import { BugUpsertWithoutCommentsInput } from "../inputs/BugUpsertWithoutCommentsInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateOneWithoutCommentsInput", {
  isAbstract: true
})
export class BugUpdateOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => BugCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: BugCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BugCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => BugUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: BugUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: true
  })
  connect?: BugWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: BugUpdateWithoutCommentsInput | undefined;
}
