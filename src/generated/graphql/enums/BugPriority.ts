import * as TypeGraphQL from "type-graphql";

export enum BugPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}
TypeGraphQL.registerEnumType(BugPriority, {
  name: "BugPriority",
  description: undefined,
});
