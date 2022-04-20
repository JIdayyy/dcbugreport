/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field } from 'type-graphql';
import WidgetLoginInput from '../Inputs/widgetLoginInput';

@ArgsType()
class WidgetLoginArgs {
  @Field({
    nullable: false,
  })
  data!: WidgetLoginInput;
}

export default WidgetLoginArgs;
