import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateManyWebsiteInput } from "../inputs/ApiKeyCreateManyWebsiteInput";

@TypeGraphQL.InputType("ApiKeyCreateManyWebsiteInputEnvelope", {
  isAbstract: true
})
export class ApiKeyCreateManyWebsiteInputEnvelope {
  @TypeGraphQL.Field(_type => [ApiKeyCreateManyWebsiteInput], {
    nullable: false
  })
  data!: ApiKeyCreateManyWebsiteInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
