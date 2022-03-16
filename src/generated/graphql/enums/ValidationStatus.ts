import * as TypeGraphQL from "type-graphql";

export enum ValidationStatus {
  VALIDATED = "VALIDATED",
  NOT_VALIDATED = "NOT_VALIDATED",
  PENDING = "PENDING"
}
TypeGraphQL.registerEnumType(ValidationStatus, {
  name: "ValidationStatus",
  description: undefined,
});
