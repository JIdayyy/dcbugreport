import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugCreateManyWebsiteInputEnvelope } from "../inputs/BugCreateManyWebsiteInputEnvelope";
import { BugCreateOrConnectWithoutWebsiteInput } from "../inputs/BugCreateOrConnectWithoutWebsiteInput";
import { BugCreateWithoutWebsiteInput } from "../inputs/BugCreateWithoutWebsiteInput";
import { BugWhereUniqueInput } from "../inputs/BugWhereUniqueInput";

@TypeGraphQL.InputType("BugCreateNestedManyWithoutWebsiteInput", {
  isAbstract: true
})
export class BugCreateNestedManyWithoutWebsiteInput {
  @TypeGraphQL.Field(_type => [BugCreateWithoutWebsiteInput], {
    nullable: true
  })
  create?: BugCreateWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugCreateOrConnectWithoutWebsiteInput], {
    nullable: true
  })
  connectOrCreate?: BugCreateOrConnectWithoutWebsiteInput[] | undefined;

  @TypeGraphQL.Field(_type => BugCreateManyWebsiteInputEnvelope, {
    nullable: true
  })
  createMany?: BugCreateManyWebsiteInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BugWhereUniqueInput], {
    nullable: true
  })
  connect?: BugWhereUniqueInput[] | undefined;
}
