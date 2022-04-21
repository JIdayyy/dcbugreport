/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType } from 'type-graphql';

@InputType('WidgetLoginInput', {
  isAbstract: true,
})
export class WidgetLoginInput {
  @Field({
    nullable: false,
  })
  widget_token!: string;
}

export default WidgetLoginInput;
