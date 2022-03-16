import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class NewNotification {
  @Field()
  email: string;

  @Field()
  password: string;
}
export default NewNotification;
