/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType } from 'type-graphql';

@InputType('GetSecretKeyInputs', {
  isAbstract: true,
})
export class GetSecretKeyInputs {
  @Field((_type) => String, {
    nullable: false,
  })
  websiteId: string;
  @Field((_type) => String, {
    nullable: false,
  })
  apiKeyId: string;
}

export default GetSecretKeyInputs;
