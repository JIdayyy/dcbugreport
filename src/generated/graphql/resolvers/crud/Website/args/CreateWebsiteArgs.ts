import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteCreateInput } from "../../../inputs/WebsiteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteCreateInput, {
    nullable: false
  })
  data!: WebsiteCreateInput;
}
