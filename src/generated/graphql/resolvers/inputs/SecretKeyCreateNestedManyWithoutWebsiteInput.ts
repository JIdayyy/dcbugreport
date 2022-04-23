import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SecretKeyCreateManyWebsiteInputEnvelope } from "../inputs/SecretKeyCreateManyWebsiteInputEnvelope";
import { SecretKeyCreateOrConnectWithoutWebsiteInput } from "../inputs/SecretKeyCreateOrConnectWithoutWebsiteInput";
import { SecretKeyCreateWithoutWebsiteInput } from "../inputs/SecretKeyCreateWithoutWebsiteInput";
import { SecretKeyWhereUniqueInput } from "../inputs/SecretKeyWhereUniqueInput";

@TypeGraphQL.InputType("SecretKeyCreateNestedManyWithoutWebsiteInput", {
  isAbstract: true
})
export class SecretKeyCreateNestedManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [SecretKeyCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: SecretKeyCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: SecretKeyCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => SecretKeyCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: SecretKeyCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyWhereUniqueInput], {
    nullable: true
  })
  connect?: SecretKeyWhereUniqueInput[] | undefined;
}
