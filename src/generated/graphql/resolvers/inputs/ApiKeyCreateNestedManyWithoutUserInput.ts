import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApiKeyCreateManyUserInputEnvelope } from "../inputs/ApiKeyCreateManyUserInputEnvelope";
import { ApiKeyCreateOrConnectWithoutUserInput } from "../inputs/ApiKeyCreateOrConnectWithoutUserInput";
import { ApiKeyCreateWithoutUserInput } from "../inputs/ApiKeyCreateWithoutUserInput";
import { ApiKeyWhereUniqueInput } from "../inputs/ApiKeyWhereUniqueInput";

@TypeGraphQL.InputType("ApiKeyCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ApiKeyCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ApiKeyCreateWithoutUserInput], {
    nullable: true
  })
  create?: ApiKeyCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ApiKeyCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ApiKeyCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApiKeyWhereUniqueInput], {
    nullable: true
  })
  connect?: ApiKeyWhereUniqueInput[] | undefined;
}
