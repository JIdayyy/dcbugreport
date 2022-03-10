import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  File: crudResolvers.FileCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Bug: crudResolvers.BugCrudResolver,
  Website: crudResolvers.WebsiteCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  File: {
    file: actionResolvers.FindUniqueFileResolver,
    findFirstFile: actionResolvers.FindFirstFileResolver,
    files: actionResolvers.FindManyFileResolver,
    createFile: actionResolvers.CreateFileResolver,
    createManyFile: actionResolvers.CreateManyFileResolver,
    deleteFile: actionResolvers.DeleteFileResolver,
    updateFile: actionResolvers.UpdateFileResolver,
    deleteManyFile: actionResolvers.DeleteManyFileResolver,
    updateManyFile: actionResolvers.UpdateManyFileResolver,
    upsertFile: actionResolvers.UpsertFileResolver,
    aggregateFile: actionResolvers.AggregateFileResolver,
    groupByFile: actionResolvers.GroupByFileResolver
  },
  Category: {
    category: actionResolvers.FindUniqueCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    createCategory: actionResolvers.CreateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    deleteCategory: actionResolvers.DeleteCategoryResolver,
    updateCategory: actionResolvers.UpdateCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    upsertCategory: actionResolvers.UpsertCategoryResolver,
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver
  },
  Bug: {
    bug: actionResolvers.FindUniqueBugResolver,
    findFirstBug: actionResolvers.FindFirstBugResolver,
    bugs: actionResolvers.FindManyBugResolver,
    createBug: actionResolvers.CreateBugResolver,
    createManyBug: actionResolvers.CreateManyBugResolver,
    deleteBug: actionResolvers.DeleteBugResolver,
    updateBug: actionResolvers.UpdateBugResolver,
    deleteManyBug: actionResolvers.DeleteManyBugResolver,
    updateManyBug: actionResolvers.UpdateManyBugResolver,
    upsertBug: actionResolvers.UpsertBugResolver,
    aggregateBug: actionResolvers.AggregateBugResolver,
    groupByBug: actionResolvers.GroupByBugResolver
  },
  Website: {
    website: actionResolvers.FindUniqueWebsiteResolver,
    findFirstWebsite: actionResolvers.FindFirstWebsiteResolver,
    websites: actionResolvers.FindManyWebsiteResolver,
    createWebsite: actionResolvers.CreateWebsiteResolver,
    createManyWebsite: actionResolvers.CreateManyWebsiteResolver,
    deleteWebsite: actionResolvers.DeleteWebsiteResolver,
    updateWebsite: actionResolvers.UpdateWebsiteResolver,
    deleteManyWebsite: actionResolvers.DeleteManyWebsiteResolver,
    updateManyWebsite: actionResolvers.UpdateManyWebsiteResolver,
    upsertWebsite: actionResolvers.UpsertWebsiteResolver,
    aggregateWebsite: actionResolvers.AggregateWebsiteResolver,
    groupByWebsite: actionResolvers.GroupByWebsiteResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  File: ["file", "findFirstFile", "files", "createFile", "createManyFile", "deleteFile", "updateFile", "deleteManyFile", "updateManyFile", "upsertFile", "aggregateFile", "groupByFile"],
  Category: ["category", "findFirstCategory", "categories", "createCategory", "createManyCategory", "deleteCategory", "updateCategory", "deleteManyCategory", "updateManyCategory", "upsertCategory", "aggregateCategory", "groupByCategory"],
  Bug: ["bug", "findFirstBug", "bugs", "createBug", "createManyBug", "deleteBug", "updateBug", "deleteManyBug", "updateManyBug", "upsertBug", "aggregateBug", "groupByBug"],
  Website: ["website", "findFirstWebsite", "websites", "createWebsite", "createManyWebsite", "deleteWebsite", "updateWebsite", "deleteManyWebsite", "updateManyWebsite", "upsertWebsite", "aggregateWebsite", "groupByWebsite"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFileArgs: ["where"],
  FindFirstFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFileArgs: ["data"],
  CreateManyFileArgs: ["data", "skipDuplicates"],
  DeleteFileArgs: ["where"],
  UpdateFileArgs: ["data", "where"],
  DeleteManyFileArgs: ["where"],
  UpdateManyFileArgs: ["data", "where"],
  UpsertFileArgs: ["where", "create", "update"],
  AggregateFileArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoryArgs: ["data"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  DeleteCategoryArgs: ["where"],
  UpdateCategoryArgs: ["data", "where"],
  DeleteManyCategoryArgs: ["where"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpsertCategoryArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueBugArgs: ["where"],
  FindFirstBugArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBugArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBugArgs: ["data"],
  CreateManyBugArgs: ["data", "skipDuplicates"],
  DeleteBugArgs: ["where"],
  UpdateBugArgs: ["data", "where"],
  DeleteManyBugArgs: ["where"],
  UpdateManyBugArgs: ["data", "where"],
  UpsertBugArgs: ["where", "create", "update"],
  AggregateBugArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBugArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueWebsiteArgs: ["where"],
  FindFirstWebsiteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyWebsiteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateWebsiteArgs: ["data"],
  CreateManyWebsiteArgs: ["data", "skipDuplicates"],
  DeleteWebsiteArgs: ["where"],
  UpdateWebsiteArgs: ["data", "where"],
  DeleteManyWebsiteArgs: ["where"],
  UpdateManyWebsiteArgs: ["data", "where"],
  UpsertWebsiteArgs: ["where", "create", "update"],
  AggregateWebsiteArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByWebsiteArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  File: relationResolvers.FileRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  Bug: relationResolvers.BugRelationsResolver,
  Website: relationResolvers.WebsiteRelationsResolver
};
const relationResolversInfo = {
  User: ["files", "Bug"],
  File: ["user", "bug"],
  Category: ["Bug"],
  Bug: ["user", "Website", "File", "Category"],
  Website: ["Bug"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  File: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  Category: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  Bug: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  Website: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateFile: ["_count", "_avg", "_sum", "_min", "_max"],
  FileGroupBy: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_min", "_max"],
  CategoryGroupBy: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateBug: ["_count", "_min", "_max"],
  BugGroupBy: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId", "_count", "_min", "_max"],
  AggregateWebsite: ["_count", "_min", "_max"],
  WebsiteGroupBy: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["files", "Bug"],
  UserCountAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_all"],
  UserMinAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMaxAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  FileCountAggregate: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId", "_all"],
  FileAvgAggregate: ["size"],
  FileSumAggregate: ["size"],
  FileMinAggregate: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileMaxAggregate: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  CategoryCount: ["Bug"],
  CategoryCountAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "_all"],
  CategoryMinAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  CategoryMaxAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  BugCount: ["File"],
  BugCountAggregate: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId", "_all"],
  BugMinAggregate: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  BugMaxAggregate: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  WebsiteCount: ["Bug"],
  WebsiteCountAggregate: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "_all"],
  WebsiteMinAggregate: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteMaxAggregate: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug"],
  UserOrderByWithRelationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  FileWhereInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user", "user_id", "bug", "is_disabled", "created_at", "updated_at", "bugId"],
  FileOrderByWithRelationInput: ["id", "name", "path", "size", "type", "user", "user_id", "bug", "is_disabled", "created_at", "updated_at", "bugId"],
  FileWhereUniqueInput: ["id"],
  FileOrderByWithAggregationInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId", "_count", "_avg", "_max", "_min", "_sum"],
  FileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug"],
  CategoryOrderByWithRelationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug"],
  CategoryWhereUniqueInput: ["id"],
  CategoryOrderByWithAggregationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "_count", "_max", "_min"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at"],
  BugWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "userId", "Website", "websiteId", "File", "categoryId", "Category"],
  BugOrderByWithRelationInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "userId", "Website", "websiteId", "File", "categoryId", "Category"],
  BugWhereUniqueInput: ["id"],
  BugOrderByWithAggregationInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId", "_count", "_max", "_min"],
  BugScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  WebsiteWhereInput: ["AND", "OR", "NOT", "id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug"],
  WebsiteOrderByWithRelationInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug"],
  WebsiteWhereUniqueInput: ["id"],
  WebsiteOrderByWithAggregationInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "_count", "_max", "_min"],
  WebsiteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  UserCreateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role", "files", "Bug"],
  UserUpdateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role", "files", "Bug"],
  UserCreateManyInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role"],
  UserUpdateManyMutationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role"],
  FileCreateInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "user", "bug"],
  FileUpdateInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "user", "bug"],
  FileCreateManyInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileUpdateManyMutationInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at"],
  CategoryCreateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug"],
  CategoryUpdateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug"],
  CategoryCreateManyInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  CategoryUpdateManyMutationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  BugCreateInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "File", "Category"],
  BugUpdateInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "File", "Category"],
  BugCreateManyInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  BugUpdateManyMutationInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at"],
  WebsiteCreateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug"],
  WebsiteUpdateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug"],
  WebsiteCreateManyInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteUpdateManyMutationInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  FileListRelationFilter: ["every", "some", "none"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BugListRelationFilter: ["every", "some", "none"],
  FileOrderByRelationAggregateInput: ["_count"],
  BugOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserMaxOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMinOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  BugRelationFilter: ["is", "isNot"],
  FileCountOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileAvgOrderByAggregateInput: ["size"],
  FileMaxOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileMinOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileSumOrderByAggregateInput: ["size"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CategoryCountOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  CategoryMaxOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  CategoryMinOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  EnumBugStatusFilter: ["equals", "in", "notIn", "not"],
  EnumBugPriorityFilter: ["equals", "in", "notIn", "not"],
  EnumBugSeverityFilter: ["equals", "in", "notIn", "not"],
  WebsiteRelationFilter: ["is", "isNot"],
  CategoryRelationFilter: ["is", "isNot"],
  BugCountOrderByAggregateInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  BugMaxOrderByAggregateInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  BugMinOrderByAggregateInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  EnumBugStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumBugPriorityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumBugSeverityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  WebsiteCountOrderByAggregateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteMaxOrderByAggregateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteMinOrderByAggregateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  UserCreateroleInput: ["set"],
  FileCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BugCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateroleInput: ["set", "push"],
  FileUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  BugUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateManyroleInput: ["set"],
  UserCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
  BugCreateNestedOneWithoutFileInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutFilesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BugUpdateOneRequiredWithoutFileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BugCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  BugUpdateManyWithoutCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutBugInput: ["create", "connectOrCreate", "connect"],
  WebsiteCreateNestedOneWithoutBugInput: ["create", "connectOrCreate", "connect"],
  FileCreateNestedManyWithoutBugInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoryCreateNestedOneWithoutBugInput: ["create", "connectOrCreate", "connect"],
  EnumBugStatusFieldUpdateOperationsInput: ["set"],
  EnumBugPriorityFieldUpdateOperationsInput: ["set"],
  EnumBugSeverityFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutBugInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WebsiteUpdateOneRequiredWithoutBugInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FileUpdateManyWithoutBugInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryUpdateOneWithoutBugInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  BugCreateNestedManyWithoutWebsiteInput: ["create", "connectOrCreate", "createMany", "connect"],
  BugUpdateManyWithoutWebsiteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumBugStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumBugPriorityFilter: ["equals", "in", "notIn", "not"],
  NestedEnumBugSeverityFilter: ["equals", "in", "notIn", "not"],
  NestedEnumBugStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumBugPriorityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumBugSeverityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FileCreateWithoutUserInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "bug"],
  FileCreateOrConnectWithoutUserInput: ["where", "create"],
  FileCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BugCreateWithoutUserInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "Website", "File", "Category"],
  BugCreateOrConnectWithoutUserInput: ["where", "create"],
  BugCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  FileUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  FileScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  BugUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  BugUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  BugUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BugScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "categoryId"],
  UserCreateWithoutFilesInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role", "Bug"],
  UserCreateOrConnectWithoutFilesInput: ["where", "create"],
  BugCreateWithoutFileInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "Category"],
  BugCreateOrConnectWithoutFileInput: ["where", "create"],
  UserUpsertWithoutFilesInput: ["update", "create"],
  UserUpdateWithoutFilesInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role", "Bug"],
  BugUpsertWithoutFileInput: ["update", "create"],
  BugUpdateWithoutFileInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "Category"],
  BugCreateWithoutCategoryInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "File"],
  BugCreateOrConnectWithoutCategoryInput: ["where", "create"],
  BugCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  BugUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  BugUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  BugUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  UserCreateWithoutBugInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role", "files"],
  UserCreateOrConnectWithoutBugInput: ["where", "create"],
  WebsiteCreateWithoutBugInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteCreateOrConnectWithoutBugInput: ["where", "create"],
  FileCreateWithoutBugInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "user"],
  FileCreateOrConnectWithoutBugInput: ["where", "create"],
  FileCreateManyBugInputEnvelope: ["data", "skipDuplicates"],
  CategoryCreateWithoutBugInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  CategoryCreateOrConnectWithoutBugInput: ["where", "create"],
  UserUpsertWithoutBugInput: ["update", "create"],
  UserUpdateWithoutBugInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at", "role", "files"],
  WebsiteUpsertWithoutBugInput: ["update", "create"],
  WebsiteUpdateWithoutBugInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  FileUpsertWithWhereUniqueWithoutBugInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutBugInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutBugInput: ["where", "data"],
  CategoryUpsertWithoutBugInput: ["update", "create"],
  CategoryUpdateWithoutBugInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at"],
  BugCreateWithoutWebsiteInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "File", "Category"],
  BugCreateOrConnectWithoutWebsiteInput: ["where", "create"],
  BugCreateManyWebsiteInputEnvelope: ["data", "skipDuplicates"],
  BugUpsertWithWhereUniqueWithoutWebsiteInput: ["where", "update", "create"],
  BugUpdateWithWhereUniqueWithoutWebsiteInput: ["where", "data"],
  BugUpdateManyWithWhereWithoutWebsiteInput: ["where", "data"],
  FileCreateManyUserInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "bugId"],
  BugCreateManyUserInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "websiteId", "categoryId"],
  FileUpdateWithoutUserInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "bug"],
  BugUpdateWithoutUserInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "Website", "File", "Category"],
  BugCreateManyCategoryInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId"],
  BugUpdateWithoutCategoryInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "File"],
  FileCreateManyBugInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at"],
  FileUpdateWithoutBugInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "user"],
  BugCreateManyWebsiteInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "categoryId"],
  BugUpdateWithoutWebsiteInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "File", "Category"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

