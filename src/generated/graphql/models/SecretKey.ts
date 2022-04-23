import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ApiKey } from "../models/ApiKey";
import { User } from "../models/User";
import { Website } from "../models/Website";

@TypeGraphQL.ObjectType("SecretKey", {
  isAbstract: true
})
export class SecretKey {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  website?: Website;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  websiteId!: string;

  api_key?: ApiKey;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  apiKeyId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;
}
