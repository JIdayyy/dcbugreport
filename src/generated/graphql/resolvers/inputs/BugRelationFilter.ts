import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugWhereInput } from "../inputs/BugWhereInput";

@TypeGraphQL.InputType("BugRelationFilter", {
  isAbstract: true
})
export class BugRelationFilter {
  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  is?: BugWhereInput | undefined;

  @TypeGraphQL.Field(_type => BugWhereInput, {
    nullable: true
  })
  isNot?: BugWhereInput | undefined;
}
