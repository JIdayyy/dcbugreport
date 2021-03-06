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
  Comment: crudResolvers.CommentCrudResolver,
  Feature: crudResolvers.FeatureCrudResolver,
  File: crudResolvers.FileCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Bug: crudResolvers.BugCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver,
  Website: crudResolvers.WebsiteCrudResolver,
  ApiKey: crudResolvers.ApiKeyCrudResolver,
  SecretKey: crudResolvers.SecretKeyCrudResolver
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
  Comment: {
    comment: actionResolvers.FindUniqueCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    createComment: actionResolvers.CreateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    deleteComment: actionResolvers.DeleteCommentResolver,
    updateComment: actionResolvers.UpdateCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    upsertComment: actionResolvers.UpsertCommentResolver,
    aggregateComment: actionResolvers.AggregateCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver
  },
  Feature: {
    feature: actionResolvers.FindUniqueFeatureResolver,
    findFirstFeature: actionResolvers.FindFirstFeatureResolver,
    features: actionResolvers.FindManyFeatureResolver,
    createFeature: actionResolvers.CreateFeatureResolver,
    createManyFeature: actionResolvers.CreateManyFeatureResolver,
    deleteFeature: actionResolvers.DeleteFeatureResolver,
    updateFeature: actionResolvers.UpdateFeatureResolver,
    deleteManyFeature: actionResolvers.DeleteManyFeatureResolver,
    updateManyFeature: actionResolvers.UpdateManyFeatureResolver,
    upsertFeature: actionResolvers.UpsertFeatureResolver,
    aggregateFeature: actionResolvers.AggregateFeatureResolver,
    groupByFeature: actionResolvers.GroupByFeatureResolver
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
  Notification: {
    notification: actionResolvers.FindUniqueNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    createNotification: actionResolvers.CreateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    deleteNotification: actionResolvers.DeleteNotificationResolver,
    updateNotification: actionResolvers.UpdateNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    upsertNotification: actionResolvers.UpsertNotificationResolver,
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver
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
  },
  ApiKey: {
    apiKey: actionResolvers.FindUniqueApiKeyResolver,
    findFirstApiKey: actionResolvers.FindFirstApiKeyResolver,
    apiKeys: actionResolvers.FindManyApiKeyResolver,
    createApiKey: actionResolvers.CreateApiKeyResolver,
    createManyApiKey: actionResolvers.CreateManyApiKeyResolver,
    deleteApiKey: actionResolvers.DeleteApiKeyResolver,
    updateApiKey: actionResolvers.UpdateApiKeyResolver,
    deleteManyApiKey: actionResolvers.DeleteManyApiKeyResolver,
    updateManyApiKey: actionResolvers.UpdateManyApiKeyResolver,
    upsertApiKey: actionResolvers.UpsertApiKeyResolver,
    aggregateApiKey: actionResolvers.AggregateApiKeyResolver,
    groupByApiKey: actionResolvers.GroupByApiKeyResolver
  },
  SecretKey: {
    secretKey: actionResolvers.FindUniqueSecretKeyResolver,
    findFirstSecretKey: actionResolvers.FindFirstSecretKeyResolver,
    secretKeys: actionResolvers.FindManySecretKeyResolver,
    createSecretKey: actionResolvers.CreateSecretKeyResolver,
    createManySecretKey: actionResolvers.CreateManySecretKeyResolver,
    deleteSecretKey: actionResolvers.DeleteSecretKeyResolver,
    updateSecretKey: actionResolvers.UpdateSecretKeyResolver,
    deleteManySecretKey: actionResolvers.DeleteManySecretKeyResolver,
    updateManySecretKey: actionResolvers.UpdateManySecretKeyResolver,
    upsertSecretKey: actionResolvers.UpsertSecretKeyResolver,
    aggregateSecretKey: actionResolvers.AggregateSecretKeyResolver,
    groupBySecretKey: actionResolvers.GroupBySecretKeyResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Comment: ["comment", "findFirstComment", "comments", "createComment", "createManyComment", "deleteComment", "updateComment", "deleteManyComment", "updateManyComment", "upsertComment", "aggregateComment", "groupByComment"],
  Feature: ["feature", "findFirstFeature", "features", "createFeature", "createManyFeature", "deleteFeature", "updateFeature", "deleteManyFeature", "updateManyFeature", "upsertFeature", "aggregateFeature", "groupByFeature"],
  File: ["file", "findFirstFile", "files", "createFile", "createManyFile", "deleteFile", "updateFile", "deleteManyFile", "updateManyFile", "upsertFile", "aggregateFile", "groupByFile"],
  Category: ["category", "findFirstCategory", "categories", "createCategory", "createManyCategory", "deleteCategory", "updateCategory", "deleteManyCategory", "updateManyCategory", "upsertCategory", "aggregateCategory", "groupByCategory"],
  Bug: ["bug", "findFirstBug", "bugs", "createBug", "createManyBug", "deleteBug", "updateBug", "deleteManyBug", "updateManyBug", "upsertBug", "aggregateBug", "groupByBug"],
  Notification: ["notification", "findFirstNotification", "notifications", "createNotification", "createManyNotification", "deleteNotification", "updateNotification", "deleteManyNotification", "updateManyNotification", "upsertNotification", "aggregateNotification", "groupByNotification"],
  Website: ["website", "findFirstWebsite", "websites", "createWebsite", "createManyWebsite", "deleteWebsite", "updateWebsite", "deleteManyWebsite", "updateManyWebsite", "upsertWebsite", "aggregateWebsite", "groupByWebsite"],
  ApiKey: ["apiKey", "findFirstApiKey", "apiKeys", "createApiKey", "createManyApiKey", "deleteApiKey", "updateApiKey", "deleteManyApiKey", "updateManyApiKey", "upsertApiKey", "aggregateApiKey", "groupByApiKey"],
  SecretKey: ["secretKey", "findFirstSecretKey", "secretKeys", "createSecretKey", "createManySecretKey", "deleteSecretKey", "updateSecretKey", "deleteManySecretKey", "updateManySecretKey", "upsertSecretKey", "aggregateSecretKey", "groupBySecretKey"]
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
  FindUniqueCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCommentArgs: ["data"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  DeleteCommentArgs: ["where"],
  UpdateCommentArgs: ["data", "where"],
  DeleteManyCommentArgs: ["where"],
  UpdateManyCommentArgs: ["data", "where"],
  UpsertCommentArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFeatureArgs: ["where"],
  FindFirstFeatureArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFeatureArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFeatureArgs: ["data"],
  CreateManyFeatureArgs: ["data", "skipDuplicates"],
  DeleteFeatureArgs: ["where"],
  UpdateFeatureArgs: ["data", "where"],
  DeleteManyFeatureArgs: ["where"],
  UpdateManyFeatureArgs: ["data", "where"],
  UpsertFeatureArgs: ["where", "create", "update"],
  AggregateFeatureArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFeatureArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateNotificationArgs: ["data"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  DeleteNotificationArgs: ["where"],
  UpdateNotificationArgs: ["data", "where"],
  DeleteManyNotificationArgs: ["where"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpsertNotificationArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  GroupByWebsiteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueApiKeyArgs: ["where"],
  FindFirstApiKeyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyApiKeyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateApiKeyArgs: ["data"],
  CreateManyApiKeyArgs: ["data", "skipDuplicates"],
  DeleteApiKeyArgs: ["where"],
  UpdateApiKeyArgs: ["data", "where"],
  DeleteManyApiKeyArgs: ["where"],
  UpdateManyApiKeyArgs: ["data", "where"],
  UpsertApiKeyArgs: ["where", "create", "update"],
  AggregateApiKeyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByApiKeyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSecretKeyArgs: ["where"],
  FindFirstSecretKeyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySecretKeyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSecretKeyArgs: ["data"],
  CreateManySecretKeyArgs: ["data", "skipDuplicates"],
  DeleteSecretKeyArgs: ["where"],
  UpdateSecretKeyArgs: ["data", "where"],
  DeleteManySecretKeyArgs: ["where"],
  UpdateManySecretKeyArgs: ["data", "where"],
  UpsertSecretKeyArgs: ["where", "create", "update"],
  AggregateSecretKeyArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySecretKeyArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  Comment: relationResolvers.CommentRelationsResolver,
  Feature: relationResolvers.FeatureRelationsResolver,
  File: relationResolvers.FileRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  Bug: relationResolvers.BugRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver,
  Website: relationResolvers.WebsiteRelationsResolver,
  ApiKey: relationResolvers.ApiKeyRelationsResolver,
  SecretKey: relationResolvers.SecretKeyRelationsResolver
};
const relationResolversInfo = {
  User: ["files", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  Comment: ["user", "Feature", "Bug"],
  Feature: ["website", "comments", "category", "User"],
  File: ["user", "bug"],
  Category: ["Bug", "Feature"],
  Bug: ["user", "Website", "File", "Category", "comments"],
  Notification: ["user", "sender"],
  Website: ["Bug", "Feature", "ApiKey", "secret_key"],
  ApiKey: ["user", "website", "secret_key"],
  SecretKey: ["user", "website", "api_key"]
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
  Comment: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  Feature: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  File: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  Category: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  Bug: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  Notification: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics"],
  Website: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  ApiKey: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  SecretKey: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"]
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
  AggregateComment: ["_count", "_min", "_max"],
  CommentGroupBy: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId", "_count", "_min", "_max"],
  AggregateFeature: ["_count", "_min", "_max"],
  FeatureGroupBy: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId", "_count", "_min", "_max"],
  AggregateFile: ["_count", "_avg", "_sum", "_min", "_max"],
  FileGroupBy: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_min", "_max"],
  CategoryGroupBy: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon", "_count", "_min", "_max"],
  AggregateBug: ["_count", "_avg", "_sum", "_min", "_max"],
  BugGroupBy: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateNotification: ["_count", "_min", "_max"],
  NotificationGroupBy: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics", "_count", "_min", "_max"],
  AggregateWebsite: ["_count", "_min", "_max"],
  WebsiteGroupBy: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregateApiKey: ["_count", "_min", "_max"],
  ApiKeyGroupBy: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId", "_count", "_min", "_max"],
  AggregateSecretKey: ["_count", "_min", "_max"],
  SecretKeyGroupBy: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["files", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserCountAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_all"],
  UserMinAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMaxAggregate: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  CommentCountAggregate: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId", "_all"],
  CommentMinAggregate: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  CommentMaxAggregate: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  FeatureCount: ["comments"],
  FeatureCountAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId", "_all"],
  FeatureMinAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  FeatureMaxAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  FileCountAggregate: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId", "_all"],
  FileAvgAggregate: ["size"],
  FileSumAggregate: ["size"],
  FileMinAggregate: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileMaxAggregate: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  CategoryCount: ["Bug", "Feature"],
  CategoryCountAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon", "_all"],
  CategoryMinAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  CategoryMaxAggregate: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  BugCount: ["File", "comments"],
  BugCountAggregate: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId", "_all"],
  BugAvgAggregate: ["number"],
  BugSumAggregate: ["number"],
  BugMinAggregate: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  BugMaxAggregate: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  NotificationCountAggregate: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics", "_all"],
  NotificationMinAggregate: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId"],
  NotificationMaxAggregate: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId"],
  WebsiteCount: ["Bug", "Feature", "ApiKey", "secret_key"],
  WebsiteCountAggregate: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "_all"],
  WebsiteMinAggregate: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteMaxAggregate: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  ApiKeyCountAggregate: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId", "_all"],
  ApiKeyMinAggregate: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  ApiKeyMaxAggregate: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  SecretKeyCountAggregate: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at", "_all"],
  SecretKeyMinAggregate: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  SecretKeyMaxAggregate: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserOrderByWithRelationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "text", "created_at", "updated_at", "user", "userId", "Feature", "featureId", "Bug", "bugId"],
  CommentOrderByWithRelationInput: ["id", "text", "created_at", "updated_at", "user", "userId", "Feature", "featureId", "Bug", "bugId"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId", "_count", "_max", "_min"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  FeatureWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "websiteId", "comments", "category", "categoryId", "User", "userId", "widgetsId"],
  FeatureOrderByWithRelationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "websiteId", "comments", "category", "categoryId", "User", "userId", "widgetsId"],
  FeatureWhereUniqueInput: ["id"],
  FeatureOrderByWithAggregationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId", "_count", "_max", "_min"],
  FeatureScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  FileWhereInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user", "user_id", "bug", "is_disabled", "created_at", "updated_at", "bugId"],
  FileOrderByWithRelationInput: ["id", "name", "path", "size", "type", "user", "user_id", "bug", "is_disabled", "created_at", "updated_at", "bugId"],
  FileWhereUniqueInput: ["id"],
  FileOrderByWithAggregationInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId", "_count", "_avg", "_max", "_min", "_sum"],
  FileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug", "backgroundColor", "icon", "Feature"],
  CategoryOrderByWithRelationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug", "backgroundColor", "icon", "Feature"],
  CategoryWhereUniqueInput: ["id"],
  CategoryOrderByWithAggregationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon", "_count", "_max", "_min"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  BugWhereInput: ["AND", "OR", "NOT", "id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "userId", "Website", "websiteId", "validation_status", "File", "categoryId", "Category", "comments"],
  BugOrderByWithRelationInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "userId", "Website", "websiteId", "validation_status", "File", "categoryId", "Category", "comments"],
  BugWhereUniqueInput: ["id", "number"],
  BugOrderByWithAggregationInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId", "_count", "_avg", "_max", "_min", "_sum"],
  BugScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "user", "userId", "sender", "senderId", "bugId", "topics"],
  NotificationOrderByWithRelationInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "user", "userId", "sender", "senderId", "bugId", "topics"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics", "_count", "_max", "_min"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics"],
  WebsiteWhereInput: ["AND", "OR", "NOT", "id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "ApiKey", "secret_key"],
  WebsiteOrderByWithRelationInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "ApiKey", "secret_key"],
  WebsiteWhereUniqueInput: ["id"],
  WebsiteOrderByWithAggregationInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "_count", "_max", "_min"],
  WebsiteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  ApiKeyWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "value", "website", "websiteId", "created_at", "updated_at", "secret_key", "secretKeyId"],
  ApiKeyOrderByWithRelationInput: ["id", "user", "userId", "value", "website", "websiteId", "created_at", "updated_at", "secret_key", "secretKeyId"],
  ApiKeyWhereUniqueInput: ["id"],
  ApiKeyOrderByWithAggregationInput: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId", "_count", "_max", "_min"],
  ApiKeyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  SecretKeyWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "value", "website", "websiteId", "api_key", "apiKeyId", "created_at", "updated_at"],
  SecretKeyOrderByWithRelationInput: ["id", "user", "userId", "value", "website", "websiteId", "api_key", "apiKeyId", "created_at", "updated_at"],
  SecretKeyWhereUniqueInput: ["id", "apiKeyId"],
  SecretKeyOrderByWithAggregationInput: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at", "_count", "_max", "_min"],
  SecretKeyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  UserCreateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserUpdateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserCreateManyInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserUpdateManyMutationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  CommentCreateInput: ["id", "text", "created_at", "updated_at", "user", "Feature", "Bug"],
  CommentUpdateInput: ["id", "text", "created_at", "updated_at", "user", "Feature", "Bug"],
  CommentCreateManyInput: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  CommentUpdateManyMutationInput: ["id", "text", "created_at", "updated_at"],
  FeatureCreateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "comments", "category", "User", "widgetsId"],
  FeatureUpdateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "comments", "category", "User", "widgetsId"],
  FeatureCreateManyInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  FeatureUpdateManyMutationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "widgetsId"],
  FileCreateInput: ["id", "name", "path", "size", "type", "user", "bug", "is_disabled", "created_at", "updated_at"],
  FileUpdateInput: ["id", "name", "path", "size", "type", "user", "bug", "is_disabled", "created_at", "updated_at"],
  FileCreateManyInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileUpdateManyMutationInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at"],
  CategoryCreateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug", "backgroundColor", "icon", "Feature"],
  CategoryUpdateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug", "backgroundColor", "icon", "Feature"],
  CategoryCreateManyInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  CategoryUpdateManyMutationInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  BugCreateInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "File", "Category", "comments"],
  BugUpdateInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "File", "Category", "comments"],
  BugCreateManyInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  BugUpdateManyMutationInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "validation_status"],
  NotificationCreateInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "user", "sender", "bugId", "topics"],
  NotificationUpdateInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "user", "sender", "bugId", "topics"],
  NotificationCreateManyInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics"],
  NotificationUpdateManyMutationInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "bugId", "topics"],
  WebsiteCreateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "ApiKey", "secret_key"],
  WebsiteUpdateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "ApiKey", "secret_key"],
  WebsiteCreateManyInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteUpdateManyMutationInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  ApiKeyCreateInput: ["id", "user", "value", "website", "created_at", "updated_at", "secret_key", "secretKeyId"],
  ApiKeyUpdateInput: ["id", "user", "value", "website", "created_at", "updated_at", "secret_key", "secretKeyId"],
  ApiKeyCreateManyInput: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  ApiKeyUpdateManyMutationInput: ["id", "value", "created_at", "updated_at", "secretKeyId"],
  SecretKeyCreateInput: ["id", "user", "value", "website", "api_key", "created_at", "updated_at"],
  SecretKeyUpdateInput: ["id", "user", "value", "website", "api_key", "created_at", "updated_at"],
  SecretKeyCreateManyInput: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  SecretKeyUpdateManyMutationInput: ["id", "value", "created_at", "updated_at"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  FileListRelationFilter: ["every", "some", "none"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BugListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  CommentListRelationFilter: ["every", "some", "none"],
  FeatureListRelationFilter: ["every", "some", "none"],
  ApiKeyListRelationFilter: ["every", "some", "none"],
  SecretKeyListRelationFilter: ["every", "some", "none"],
  FileOrderByRelationAggregateInput: ["_count"],
  BugOrderByRelationAggregateInput: ["_count"],
  NotificationOrderByRelationAggregateInput: ["_count"],
  CommentOrderByRelationAggregateInput: ["_count"],
  FeatureOrderByRelationAggregateInput: ["_count"],
  ApiKeyOrderByRelationAggregateInput: ["_count"],
  SecretKeyOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at"],
  UserMaxOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  UserMinOrderByAggregateInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  FeatureRelationFilter: ["is", "isNot"],
  BugRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  CommentMaxOrderByAggregateInput: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  CommentMinOrderByAggregateInput: ["id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  WebsiteRelationFilter: ["is", "isNot"],
  CategoryRelationFilter: ["is", "isNot"],
  FeatureCountOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  FeatureMaxOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  FeatureMinOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FileCountOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileAvgOrderByAggregateInput: ["size"],
  FileMaxOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileMinOrderByAggregateInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  FileSumOrderByAggregateInput: ["size"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CategoryCountOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  CategoryMaxOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  CategoryMinOrderByAggregateInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon"],
  EnumBugStatusFilter: ["equals", "in", "notIn", "not"],
  EnumBugPriorityFilter: ["equals", "in", "notIn", "not"],
  EnumBugSeverityFilter: ["equals", "in", "notIn", "not"],
  EnumValidationStatusFilter: ["equals", "in", "notIn", "not"],
  BugCountOrderByAggregateInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  BugAvgOrderByAggregateInput: ["number"],
  BugMaxOrderByAggregateInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  BugMinOrderByAggregateInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  BugSumOrderByAggregateInput: ["number"],
  EnumBugStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumBugPriorityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumBugSeverityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumValidationStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumNotificationTopicsNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  NotificationCountOrderByAggregateInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics"],
  NotificationMaxOrderByAggregateInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId"],
  NotificationMinOrderByAggregateInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId"],
  WebsiteCountOrderByAggregateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteMaxOrderByAggregateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  WebsiteMinOrderByAggregateInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at"],
  SecretKeyRelationFilter: ["is", "isNot"],
  ApiKeyCountOrderByAggregateInput: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  ApiKeyMaxOrderByAggregateInput: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  ApiKeyMinOrderByAggregateInput: ["id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  ApiKeyRelationFilter: ["is", "isNot"],
  SecretKeyCountOrderByAggregateInput: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  SecretKeyMaxOrderByAggregateInput: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  SecretKeyMinOrderByAggregateInput: ["id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  FileCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateroleInput: ["set"],
  BugCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutSenderInput: ["create", "connectOrCreate", "createMany", "connect"],
  CommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FeatureCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ApiKeyCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SecretKeyCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  FileUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserUpdateroleInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BugUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutSenderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CommentUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FeatureUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ApiKeyUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SecretKeyUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutCommentInput: ["create", "connectOrCreate", "connect"],
  FeatureCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  BugCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCommentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  FeatureUpdateOneWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  BugUpdateOneWithoutCommentsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  WebsiteCreateNestedOneWithoutFeatureInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutFeatureInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoryCreateNestedOneWithoutFeatureInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFeatureInput: ["create", "connectOrCreate", "connect"],
  WebsiteUpdateOneRequiredWithoutFeatureInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CommentUpdateManyWithoutFeatureInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryUpdateOneRequiredWithoutFeatureInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneWithoutFeatureInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutFilesInput: ["create", "connectOrCreate", "connect"],
  BugCreateNestedOneWithoutFileInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserUpdateOneRequiredWithoutFilesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BugUpdateOneRequiredWithoutFileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BugCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  FeatureCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  BugUpdateManyWithoutCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FeatureUpdateManyWithoutCategoryInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutBugInput: ["create", "connectOrCreate", "connect"],
  WebsiteCreateNestedOneWithoutBugInput: ["create", "connectOrCreate", "connect"],
  FileCreateNestedManyWithoutBugInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoryCreateNestedOneWithoutBugInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutBugInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumBugStatusFieldUpdateOperationsInput: ["set"],
  EnumBugPriorityFieldUpdateOperationsInput: ["set"],
  EnumBugSeverityFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutBugInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WebsiteUpdateOneRequiredWithoutBugInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumValidationStatusFieldUpdateOperationsInput: ["set"],
  FileUpdateManyWithoutBugInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryUpdateOneWithoutBugInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CommentUpdateManyWithoutBugInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutNotificationInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutNotifications_sentInput: ["create", "connectOrCreate", "connect"],
  NotificationCreatetopicsInput: ["set"],
  UserUpdateOneRequiredWithoutNotificationInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutNotifications_sentInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NotificationUpdatetopicsInput: ["set", "push"],
  BugCreateNestedManyWithoutWebsiteInput: ["create", "connectOrCreate", "createMany", "connect"],
  FeatureCreateNestedManyWithoutWebsiteInput: ["create", "connectOrCreate", "createMany", "connect"],
  ApiKeyCreateNestedManyWithoutWebsiteInput: ["create", "connectOrCreate", "createMany", "connect"],
  SecretKeyCreateNestedManyWithoutWebsiteInput: ["create", "connectOrCreate", "createMany", "connect"],
  BugUpdateManyWithoutWebsiteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FeatureUpdateManyWithoutWebsiteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ApiKeyUpdateManyWithoutWebsiteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SecretKeyUpdateManyWithoutWebsiteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutKeysInput: ["create", "connectOrCreate", "connect"],
  WebsiteCreateNestedOneWithoutApiKeyInput: ["create", "connectOrCreate", "connect"],
  SecretKeyCreateNestedOneWithoutApi_keyInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutKeysInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WebsiteUpdateOneRequiredWithoutApiKeyInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SecretKeyUpdateOneWithoutApi_keyInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateNestedOneWithoutSecret_keyInput: ["create", "connectOrCreate", "connect"],
  WebsiteCreateNestedOneWithoutSecret_keyInput: ["create", "connectOrCreate", "connect"],
  ApiKeyCreateNestedOneWithoutSecret_keyInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutSecret_keyInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  WebsiteUpdateOneRequiredWithoutSecret_keyInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ApiKeyUpdateOneRequiredWithoutSecret_keyInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedEnumValidationStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumBugStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumBugPriorityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumBugSeverityWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumValidationStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  FileCreateWithoutUserInput: ["id", "name", "path", "size", "type", "bug", "is_disabled", "created_at", "updated_at"],
  FileCreateOrConnectWithoutUserInput: ["where", "create"],
  FileCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BugCreateWithoutUserInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "Website", "validation_status", "File", "Category", "comments"],
  BugCreateOrConnectWithoutUserInput: ["where", "create"],
  BugCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutUserInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "sender", "bugId", "topics"],
  NotificationCreateOrConnectWithoutUserInput: ["where", "create"],
  NotificationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutSenderInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "user", "bugId", "topics"],
  NotificationCreateOrConnectWithoutSenderInput: ["where", "create"],
  NotificationCreateManySenderInputEnvelope: ["data", "skipDuplicates"],
  CommentCreateWithoutUserInput: ["id", "text", "created_at", "updated_at", "Feature", "Bug"],
  CommentCreateOrConnectWithoutUserInput: ["where", "create"],
  CommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  FeatureCreateWithoutUserInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "comments", "category", "widgetsId"],
  FeatureCreateOrConnectWithoutUserInput: ["where", "create"],
  FeatureCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ApiKeyCreateWithoutUserInput: ["id", "value", "website", "created_at", "updated_at", "secret_key", "secretKeyId"],
  ApiKeyCreateOrConnectWithoutUserInput: ["where", "create"],
  ApiKeyCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SecretKeyCreateWithoutUserInput: ["id", "value", "website", "api_key", "created_at", "updated_at"],
  SecretKeyCreateOrConnectWithoutUserInput: ["where", "create"],
  SecretKeyCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  FileUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  FileScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at", "bugId"],
  BugUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  BugUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  BugUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BugScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status", "categoryId"],
  NotificationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "senderId", "bugId", "topics"],
  NotificationUpsertWithWhereUniqueWithoutSenderInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutSenderInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutSenderInput: ["where", "data"],
  CommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "text", "created_at", "updated_at", "userId", "featureId", "bugId"],
  FeatureUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  FeatureUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  FeatureUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  FeatureScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "userId", "widgetsId"],
  ApiKeyUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ApiKeyUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ApiKeyUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ApiKeyScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  SecretKeyUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SecretKeyUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SecretKeyUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SecretKeyScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  UserCreateWithoutCommentInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "feature", "Keys", "secret_key"],
  UserCreateOrConnectWithoutCommentInput: ["where", "create"],
  FeatureCreateWithoutCommentsInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "category", "User", "widgetsId"],
  FeatureCreateOrConnectWithoutCommentsInput: ["where", "create"],
  BugCreateWithoutCommentsInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "File", "Category"],
  BugCreateOrConnectWithoutCommentsInput: ["where", "create"],
  UserUpsertWithoutCommentInput: ["update", "create"],
  UserUpdateWithoutCommentInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "feature", "Keys", "secret_key"],
  FeatureUpsertWithoutCommentsInput: ["update", "create"],
  FeatureUpdateWithoutCommentsInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "category", "User", "widgetsId"],
  BugUpsertWithoutCommentsInput: ["update", "create"],
  BugUpdateWithoutCommentsInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "File", "Category"],
  WebsiteCreateWithoutFeatureInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "ApiKey", "secret_key"],
  WebsiteCreateOrConnectWithoutFeatureInput: ["where", "create"],
  CommentCreateWithoutFeatureInput: ["id", "text", "created_at", "updated_at", "user", "Bug"],
  CommentCreateOrConnectWithoutFeatureInput: ["where", "create"],
  CommentCreateManyFeatureInputEnvelope: ["data", "skipDuplicates"],
  CategoryCreateWithoutFeatureInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug", "backgroundColor", "icon"],
  CategoryCreateOrConnectWithoutFeatureInput: ["where", "create"],
  UserCreateWithoutFeatureInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "Keys", "secret_key"],
  UserCreateOrConnectWithoutFeatureInput: ["where", "create"],
  WebsiteUpsertWithoutFeatureInput: ["update", "create"],
  WebsiteUpdateWithoutFeatureInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "ApiKey", "secret_key"],
  CommentUpsertWithWhereUniqueWithoutFeatureInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutFeatureInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutFeatureInput: ["where", "data"],
  CategoryUpsertWithoutFeatureInput: ["update", "create"],
  CategoryUpdateWithoutFeatureInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "Bug", "backgroundColor", "icon"],
  UserUpsertWithoutFeatureInput: ["update", "create"],
  UserUpdateWithoutFeatureInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "Keys", "secret_key"],
  UserCreateWithoutFilesInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserCreateOrConnectWithoutFilesInput: ["where", "create"],
  BugCreateWithoutFileInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "Category", "comments"],
  BugCreateOrConnectWithoutFileInput: ["where", "create"],
  UserUpsertWithoutFilesInput: ["update", "create"],
  UserUpdateWithoutFilesInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  BugUpsertWithoutFileInput: ["update", "create"],
  BugUpdateWithoutFileInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "Category", "comments"],
  BugCreateWithoutCategoryInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "File", "comments"],
  BugCreateOrConnectWithoutCategoryInput: ["where", "create"],
  BugCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  FeatureCreateWithoutCategoryInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "comments", "User", "widgetsId"],
  FeatureCreateOrConnectWithoutCategoryInput: ["where", "create"],
  FeatureCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  BugUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  BugUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  BugUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  FeatureUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  FeatureUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  FeatureUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  UserCreateWithoutBugInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserCreateOrConnectWithoutBugInput: ["where", "create"],
  WebsiteCreateWithoutBugInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Feature", "ApiKey", "secret_key"],
  WebsiteCreateOrConnectWithoutBugInput: ["where", "create"],
  FileCreateWithoutBugInput: ["id", "name", "path", "size", "type", "user", "is_disabled", "created_at", "updated_at"],
  FileCreateOrConnectWithoutBugInput: ["where", "create"],
  FileCreateManyBugInputEnvelope: ["data", "skipDuplicates"],
  CategoryCreateWithoutBugInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon", "Feature"],
  CategoryCreateOrConnectWithoutBugInput: ["where", "create"],
  CommentCreateWithoutBugInput: ["id", "text", "created_at", "updated_at", "user", "Feature"],
  CommentCreateOrConnectWithoutBugInput: ["where", "create"],
  CommentCreateManyBugInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutBugInput: ["update", "create"],
  UserUpdateWithoutBugInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Notification", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  WebsiteUpsertWithoutBugInput: ["update", "create"],
  WebsiteUpdateWithoutBugInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Feature", "ApiKey", "secret_key"],
  FileUpsertWithWhereUniqueWithoutBugInput: ["where", "update", "create"],
  FileUpdateWithWhereUniqueWithoutBugInput: ["where", "data"],
  FileUpdateManyWithWhereWithoutBugInput: ["where", "data"],
  CategoryUpsertWithoutBugInput: ["update", "create"],
  CategoryUpdateWithoutBugInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "backgroundColor", "icon", "Feature"],
  CommentUpsertWithWhereUniqueWithoutBugInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutBugInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutBugInput: ["where", "data"],
  UserCreateWithoutNotificationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserCreateOrConnectWithoutNotificationInput: ["where", "create"],
  UserCreateWithoutNotifications_sentInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "Comment", "feature", "Keys", "secret_key"],
  UserCreateOrConnectWithoutNotifications_sentInput: ["where", "create"],
  UserUpsertWithoutNotificationInput: ["update", "create"],
  UserUpdateWithoutNotificationInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "notifications_sent", "Comment", "feature", "Keys", "secret_key"],
  UserUpsertWithoutNotifications_sentInput: ["update", "create"],
  UserUpdateWithoutNotifications_sentInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "Comment", "feature", "Keys", "secret_key"],
  BugCreateWithoutWebsiteInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "validation_status", "File", "Category", "comments"],
  BugCreateOrConnectWithoutWebsiteInput: ["where", "create"],
  BugCreateManyWebsiteInputEnvelope: ["data", "skipDuplicates"],
  FeatureCreateWithoutWebsiteInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "comments", "category", "User", "widgetsId"],
  FeatureCreateOrConnectWithoutWebsiteInput: ["where", "create"],
  FeatureCreateManyWebsiteInputEnvelope: ["data", "skipDuplicates"],
  ApiKeyCreateWithoutWebsiteInput: ["id", "user", "value", "created_at", "updated_at", "secret_key", "secretKeyId"],
  ApiKeyCreateOrConnectWithoutWebsiteInput: ["where", "create"],
  ApiKeyCreateManyWebsiteInputEnvelope: ["data", "skipDuplicates"],
  SecretKeyCreateWithoutWebsiteInput: ["id", "user", "value", "api_key", "created_at", "updated_at"],
  SecretKeyCreateOrConnectWithoutWebsiteInput: ["where", "create"],
  SecretKeyCreateManyWebsiteInputEnvelope: ["data", "skipDuplicates"],
  BugUpsertWithWhereUniqueWithoutWebsiteInput: ["where", "update", "create"],
  BugUpdateWithWhereUniqueWithoutWebsiteInput: ["where", "data"],
  BugUpdateManyWithWhereWithoutWebsiteInput: ["where", "data"],
  FeatureUpsertWithWhereUniqueWithoutWebsiteInput: ["where", "update", "create"],
  FeatureUpdateWithWhereUniqueWithoutWebsiteInput: ["where", "data"],
  FeatureUpdateManyWithWhereWithoutWebsiteInput: ["where", "data"],
  ApiKeyUpsertWithWhereUniqueWithoutWebsiteInput: ["where", "update", "create"],
  ApiKeyUpdateWithWhereUniqueWithoutWebsiteInput: ["where", "data"],
  ApiKeyUpdateManyWithWhereWithoutWebsiteInput: ["where", "data"],
  SecretKeyUpsertWithWhereUniqueWithoutWebsiteInput: ["where", "update", "create"],
  SecretKeyUpdateWithWhereUniqueWithoutWebsiteInput: ["where", "data"],
  SecretKeyUpdateManyWithWhereWithoutWebsiteInput: ["where", "data"],
  UserCreateWithoutKeysInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "secret_key"],
  UserCreateOrConnectWithoutKeysInput: ["where", "create"],
  WebsiteCreateWithoutApiKeyInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "secret_key"],
  WebsiteCreateOrConnectWithoutApiKeyInput: ["where", "create"],
  SecretKeyCreateWithoutApi_keyInput: ["id", "user", "value", "website", "created_at", "updated_at"],
  SecretKeyCreateOrConnectWithoutApi_keyInput: ["where", "create"],
  UserUpsertWithoutKeysInput: ["update", "create"],
  UserUpdateWithoutKeysInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "secret_key"],
  WebsiteUpsertWithoutApiKeyInput: ["update", "create"],
  WebsiteUpdateWithoutApiKeyInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "secret_key"],
  SecretKeyUpsertWithoutApi_keyInput: ["update", "create"],
  SecretKeyUpdateWithoutApi_keyInput: ["id", "user", "value", "website", "created_at", "updated_at"],
  UserCreateWithoutSecret_keyInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys"],
  UserCreateOrConnectWithoutSecret_keyInput: ["where", "create"],
  WebsiteCreateWithoutSecret_keyInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "ApiKey"],
  WebsiteCreateOrConnectWithoutSecret_keyInput: ["where", "create"],
  ApiKeyCreateWithoutSecret_keyInput: ["id", "user", "value", "website", "created_at", "updated_at", "secretKeyId"],
  ApiKeyCreateOrConnectWithoutSecret_keyInput: ["where", "create"],
  UserUpsertWithoutSecret_keyInput: ["update", "create"],
  UserUpdateWithoutSecret_keyInput: ["id", "first_name", "last_name", "email", "password", "is_disabled", "files", "avatar", "role", "created_at", "updated_at", "Bug", "Notification", "notifications_sent", "Comment", "feature", "Keys"],
  WebsiteUpsertWithoutSecret_keyInput: ["update", "create"],
  WebsiteUpdateWithoutSecret_keyInput: ["id", "name", "url", "logo", "isPreview", "created_at", "updated_at", "Bug", "Feature", "ApiKey"],
  ApiKeyUpsertWithoutSecret_keyInput: ["update", "create"],
  ApiKeyUpdateWithoutSecret_keyInput: ["id", "user", "value", "website", "created_at", "updated_at", "secretKeyId"],
  FileCreateManyUserInput: ["id", "name", "path", "size", "type", "is_disabled", "created_at", "updated_at", "bugId"],
  BugCreateManyUserInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "websiteId", "validation_status", "categoryId"],
  NotificationCreateManyUserInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "senderId", "bugId", "topics"],
  NotificationCreateManySenderInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "userId", "bugId", "topics"],
  CommentCreateManyUserInput: ["id", "text", "created_at", "updated_at", "featureId", "bugId"],
  FeatureCreateManyUserInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "categoryId", "widgetsId"],
  ApiKeyCreateManyUserInput: ["id", "value", "websiteId", "created_at", "updated_at", "secretKeyId"],
  SecretKeyCreateManyUserInput: ["id", "value", "websiteId", "apiKeyId", "created_at", "updated_at"],
  FileUpdateWithoutUserInput: ["id", "name", "path", "size", "type", "bug", "is_disabled", "created_at", "updated_at"],
  BugUpdateWithoutUserInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "Website", "validation_status", "File", "Category", "comments"],
  NotificationUpdateWithoutUserInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "sender", "bugId", "topics"],
  NotificationUpdateWithoutSenderInput: ["id", "title", "description", "isRead", "is_disabled", "created_at", "updated_at", "user", "bugId", "topics"],
  CommentUpdateWithoutUserInput: ["id", "text", "created_at", "updated_at", "Feature", "Bug"],
  FeatureUpdateWithoutUserInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "comments", "category", "widgetsId"],
  ApiKeyUpdateWithoutUserInput: ["id", "value", "website", "created_at", "updated_at", "secret_key", "secretKeyId"],
  SecretKeyUpdateWithoutUserInput: ["id", "value", "website", "api_key", "created_at", "updated_at"],
  CommentCreateManyFeatureInput: ["id", "text", "created_at", "updated_at", "userId", "bugId"],
  CommentUpdateWithoutFeatureInput: ["id", "text", "created_at", "updated_at", "user", "Bug"],
  BugCreateManyCategoryInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "websiteId", "validation_status"],
  FeatureCreateManyCategoryInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "websiteId", "userId", "widgetsId"],
  BugUpdateWithoutCategoryInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "Website", "validation_status", "File", "comments"],
  FeatureUpdateWithoutCategoryInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "website", "comments", "User", "widgetsId"],
  FileCreateManyBugInput: ["id", "name", "path", "size", "type", "user_id", "is_disabled", "created_at", "updated_at"],
  CommentCreateManyBugInput: ["id", "text", "created_at", "updated_at", "userId", "featureId"],
  FileUpdateWithoutBugInput: ["id", "name", "path", "size", "type", "user", "is_disabled", "created_at", "updated_at"],
  CommentUpdateWithoutBugInput: ["id", "text", "created_at", "updated_at", "user", "Feature"],
  BugCreateManyWebsiteInput: ["id", "title", "number", "description", "status", "priority", "severity", "created_at", "updated_at", "userId", "validation_status", "categoryId"],
  FeatureCreateManyWebsiteInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "categoryId", "userId", "widgetsId"],
  ApiKeyCreateManyWebsiteInput: ["id", "userId", "value", "created_at", "updated_at", "secretKeyId"],
  SecretKeyCreateManyWebsiteInput: ["id", "userId", "value", "apiKeyId", "created_at", "updated_at"],
  BugUpdateWithoutWebsiteInput: ["id", "title", "description", "status", "priority", "severity", "created_at", "updated_at", "user", "validation_status", "File", "Category", "comments"],
  FeatureUpdateWithoutWebsiteInput: ["id", "name", "description", "is_disabled", "created_at", "updated_at", "comments", "category", "User", "widgetsId"],
  ApiKeyUpdateWithoutWebsiteInput: ["id", "user", "value", "created_at", "updated_at", "secret_key", "secretKeyId"],
  SecretKeyUpdateWithoutWebsiteInput: ["id", "user", "value", "api_key", "created_at", "updated_at"]
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

