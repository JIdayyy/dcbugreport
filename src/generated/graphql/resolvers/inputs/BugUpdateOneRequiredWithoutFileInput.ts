import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateOrConnectWithoutFileInput } from "../inputs/BugCreateOrConnectWithoutFileInput";
import { BugCreateWithoutFileInput } from "../inputs/BugCreateWithoutFileInput";
import { BugUpdateWithoutFileInput } from "../inputs/BugUpdateWithoutFileInput";
import { BugUpsertWithoutFileInput } from "../inputs/BugUpsertWithoutFileInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugUpdateOneRequiredWithoutFileInput", {
  isAbstract: true
})
export class BugUpdateOneRequiredWithoutFileInput {
  @TypeGraphQL.Field(_type => BugCreateWithoutFileInput, {
    nullable: true
  })
  create?: BugCreateWithoutFileInput | undefined;

  @TypeGraphQL.Field(_type => BugCreateOrConnectWithoutFileInput, {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutFileInput | undefined;

  @TypeGraphQL.Field(_type => BugUpsertWithoutFileInput, {
    nullable: true
  })
  upsert?: BugUpsertWithoutFileInput | undefined;

  @TypeGraphQL.Field(_type => BugWhereUniqueInput, {
    nullable: true
  })
  connect?: BugWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BugUpdateWithoutFileInput, {
    nullable: true
  })
  update?: BugUpdateWithoutFileInput | undefined;
}
