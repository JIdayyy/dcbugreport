import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateManyWebsiteInput } from "../inputs/SecretKeyCreateManyWebsiteInput";

@TypeGraphQL.InputType("SecretKeyCreateManyWebsiteInputEnvelope", {
  isAbstract: true
})
export class SecretKeyCreateManyWebsiteInputEnvelope {
  @TypeGraphQL.Field(_type => [SecretKeyCreateManyWebsiteInput], {
    nullable: false
  })
  data!: SecretKeyCreateManyWebsiteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
