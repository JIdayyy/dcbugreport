/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType } from 'type-graphql';
import {
  BugWhereUniqueInput,
  EnumBugStatusFieldUpdateOperationsInput,
} from '../../generated/graphql';

@InputType('CloseBugInput', {
  isAbstract: true,
})
export class CloseBugInput {
  @Field((_type) => EnumBugStatusFieldUpdateOperationsInput, {
    nullable: true,
  })
  status?: EnumBugStatusFieldUpdateOperationsInput | undefined;
}

export default CloseBugInput;
