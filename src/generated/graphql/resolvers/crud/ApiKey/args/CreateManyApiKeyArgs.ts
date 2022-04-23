import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApiKeyCreateManyInput } from "../../../inputs/ApiKeyCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyApiKeyArgs {
  @TypeGraphQL.Field(_type => [ApiKeyCreateManyInput], {
    nullable: false
  })
  data!: ApiKeyCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
