import * as TypeGraphQL from 'type-graphql';
import { CreateBugFromWidgetInputs } from '../Inputs/createBugFromWidgetInputs';

@TypeGraphQL.ArgsType()
export class CreateBugFromWidgetArgs {
  @TypeGraphQL.Field((_type) => CreateBugFromWidgetInputs, {
    nullable: false,
  })
  data!: CreateBugFromWidgetInputs;
}
