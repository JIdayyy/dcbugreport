import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateManyUserInputEnvelope } from "../inputs/SecretKeyCreateManyUserInputEnvelope";
import { SecretKeyCreateOrConnectWithoutUserInput } from "../inputs/SecretKeyCreateOrConnectWithoutUserInput";
import { SecretKeyCreateWithoutUserInput } from "../inputs/SecretKeyCreateWithoutUserInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SecretKeyCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SecretKeyCreateWithoutUserInput], {
    nullable: true
  })
  create?: SecretKeyCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SecretKeyCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SecretKeyCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereUniqueInput], {
    nullable: true
  })
  connect?: SecretKeyWhereUniqueInput[] | undefined;
}
