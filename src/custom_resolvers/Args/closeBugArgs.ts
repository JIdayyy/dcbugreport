/* eslint-disable @typescript-eslint/no-unused-vars */
import * as TypeGraphQL from 'type-graphql';
import { CloseBugInput } from '../Inputs/closeBugInputs';
import { BugWhereUniqueInput } from '../../generated/graphql';

@TypeGraphQL.ArgsType()
class CloseBugArgs {
  @TypeGraphQL.Field((_type) => CloseBugInput, {
    nullable: false,
  })
  data!: CloseBugInput;

  @TypeGraphQL.Field((_type) => BugWhereUniqueInput, {
    nullable: false,
  })
  where!: BugWhereUniqueInput;
}

export default CloseBugArgs;
