import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyUpdateWithoutWebsiteInput } from "../inputs/SecretKeyUpdateWithoutWebsiteInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput", {
  isAbstract: true
})
export class SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: false
  })
  where!: SecretKeyWhereUniqueInput;

  @TypeGraphQL.Field(_type => SecretKeyUpdateWithoutWebsiteInput, {
    nullable: false
  })
  data!: SecretKeyUpdateWithoutWebsiteInput;
}
