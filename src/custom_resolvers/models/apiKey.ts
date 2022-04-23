import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ApiKeyModel {
  @Field()
  api_key: string;
  @Field()
  id: string;
}
