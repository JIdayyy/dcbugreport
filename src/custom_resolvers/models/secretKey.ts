import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SecretKeyModel {
  @Field()
  secret_key: string;
}
