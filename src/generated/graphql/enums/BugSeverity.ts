import * as TypeGraphQL from "type-graphql";

export enum BugSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}
TypeGraphQL.registerEnumType(BugSeverity, {
  name: "BugSeverity",
  description: undefined,
});
