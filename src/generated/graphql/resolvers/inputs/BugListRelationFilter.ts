import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugWhereInput } from "../inputs/BugWhereInput";

@TypeGraphQL.InputType("BugListRelationFilter", {
  isAbstract: true
})
export class BugListRelationFilter {
  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  every?: BugWhereInput | undefined;

  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  some?: BugWhereInput | undefined;

  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  none?: BugWhereInput | undefined;
}
