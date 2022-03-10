import * as TypeGraphQL from "type-graphql";

export enum BugStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  CLOSED = "CLOSED"
}
TypeGraphQL.registerEnumType(BugStatus, {
  name: "BugStatus",
  description: undefined,
});
