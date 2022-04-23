import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateManyWebsiteInputEnvelope } from "../inputs/ApiKeyCreateManyWebsiteInputEnvelope";
import { ApiKeyCreateOrConnectWithoutWebsiteInput } from "../inputs/ApiKeyCreateOrConnectWithoutWebsiteInput";
import { ApiKeyCreateWithoutWebsiteInput } from "../inputs/ApiKeyCreateWithoutWebsiteInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyCreateNestedManyWithoutWebsiteInput", {
  isAbstract: true
})
export class ApiKeyCreateNestedManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [ApiKeyCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: ApiKeyCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: ApiKeyCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: ApiKeyCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereUniqueInput], {
    nullable: true
  })
  connect?: ApiKeyWhereUniqueInput[] | undefined;
}
