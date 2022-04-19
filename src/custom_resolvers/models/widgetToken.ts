import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class WidgetToken {
  @Field()
  widget_token: string;
}
