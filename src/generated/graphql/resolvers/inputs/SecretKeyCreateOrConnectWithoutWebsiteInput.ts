import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateWithoutWebsiteInput } from "../inputs/SecretKeyCreateWithoutWebsiteInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyCreateOrConnectWithoutWebsiteInput", {
  isAbstract: true
})
export class SecretKeyCreateOrConnectWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: SecretKeyCreateWithoutWebsiteInput;
}
