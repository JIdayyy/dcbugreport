import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SecretKeyOrderByWithRelationInput } from "../../../inputs/SecretKeyOrderByWithRelationInput";
import { SecretKeyWhereInput } from "../../../inputs/SecretKeyWhereInput";
import { SecretKeyWhereUniqueInput } from "../../../inputs/SecretKeyWhereUniqueInput";
import { SecretKeyScalarFieldEnum } from "../../../../enums/SecretKeyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserSecret_keyArgs {
  @TypeGraphQL.Field(_type => SecretKeyWhereInput, {
    nullable: true
  })
  where?: SecretKeyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SecretKeyOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SecretKeyWhereUniqueInput, {
    nullable: true
  })
  cursor?: SecretKeyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SecretKeyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "value" | "websiteId" | "apiKeyId" | "created_at" | "updated_at"> | undefined;
}
