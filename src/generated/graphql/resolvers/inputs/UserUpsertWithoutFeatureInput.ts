import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFeatureInput } from "../inputs/UserCreateWithoutFeatureInput";
import { UserUpdateWithoutFeatureInput } from "../inputs/UserUpdateWithoutFeatureInput";

@TypeGraphQL.InputType("UserUpsertWithoutFeatureInput", {
  isAbstract: true
})
export class UserUpsertWithoutFeatureInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFeatureInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFeatureInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFeatureInput, {
    nullable: false
  })
  create!: UserCreateWithoutFeatureInput;
}
