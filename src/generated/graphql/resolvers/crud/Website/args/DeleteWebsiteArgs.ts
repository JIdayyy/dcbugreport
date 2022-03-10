import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WebsiteWhereUniqueInput } from "../../../inputs/WebsiteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteWebsiteArgs {
  @TypeGraphQL.Field(_type => WebsiteWhereUniqueInput, {
    nullable: false
  })
  where!: WebsiteWhereUniqueInput;
}
