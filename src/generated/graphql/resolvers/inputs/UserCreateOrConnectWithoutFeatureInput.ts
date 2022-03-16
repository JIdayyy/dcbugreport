import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFeatureInput } from "../inputs/UserCreateWithoutFeatureInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFeatureInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFeatureInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: UserCreateWithoutFeatureInput;
}
