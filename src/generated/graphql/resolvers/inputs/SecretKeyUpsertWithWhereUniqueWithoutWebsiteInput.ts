import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateWithoutWebsiteInput } from "../inputs/SecretKeyCreateWithoutWebsiteInput";
import { SecretKeyUpdateWithoutWebsiteInput } from "../inputs/SecretKeyUpdateWithoutWebsiteInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyUpdateWithoutWebsiteInput, {
    nullable: false
  })
  update!: SecretKeyUpdateWithoutWebsiteInput;

  @TypeGraphQL.Field(_type => SecretKeyCreateWithoutWebsiteInput, {
    nullable: false
  })
  create!: SecretKeyCreateWithoutWebsiteInput;
}
