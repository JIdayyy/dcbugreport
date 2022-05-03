import { WebsocketContext } from '@interfaces';
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
import * as TypeGraphQL from 'type-graphql';
import { PubSubEngine } from 'graphql-subscriptions';
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  PubSub,
  Publisher,
  Subscription,
  Root,
} from 'type-graphql';
import {
  NotificationType,
  NotificationPayload,
} from '../../models/notification';

@Resolver((_of) => NotificationType)
export class SubscribtionsResolver {
  private autoIncrement = 0;

  @Query((returns) => Date)
  currentDate(): Date {
    return new Date();
  }

  @Mutation((returns) => Boolean)
  async pubSubMutation(
    @PubSub() pubSub: PubSubEngine,
    @Arg('message', { nullable: true }) message?: string
  ): Promise<boolean> {
    const payload: NotificationPayload = {
      senderId: '1',
      userId: '1',
      message,
    };
    await pubSub.publish('NOTIFICATIONS', payload);
    return true;
  }

  @Mutation((returns) => Boolean)
  async publisherMutation(
    @PubSub('NOTIFICATIONS') publish: Publisher<NotificationPayload>,
    @Arg('message', { nullable: true }) message?: string
  ): Promise<boolean> {
    await publish({
      senderId: '1',
      userId: '1',
      message,
    });
    return true;
  }

  @Subscription({
    topics: 'NOTIFICATIONS',
    filter: () => true,
  })
  normalSubscription(
    @Root() { senderId, message }: NotificationPayload,
    @TypeGraphQL.Ctx()
    ctx: WebsocketContext
  ): NotificationType {
    return {
      id: senderId,
      date: new Date(),
      message,
    };
  }

  @Subscription((returns) => NotificationType, {
    topics: 'NOTIFICATIONS',
    filter: ({ context, payload }) => {
      return context.userId === payload.userId;
    },
  })
  subscriptionWithFilter(
    @Root() { senderId, userId, message }: NotificationPayload
  ): NotificationType {
    const newNotification: NotificationType = {
      id: senderId,
      message,
      date: new Date(),
    };
    return newNotification;
  }

  // dynamic topic

  @Mutation((returns) => Boolean)
  async pubSubMutationToDynamicTopic(
    @PubSub() pubSub: PubSubEngine,
    @Arg('topic') topic: string,
    @Arg('message', { nullable: true }) message?: string
  ): Promise<boolean> {
    const payload: NotificationPayload = {
      userId: '1',
      message,
      senderId: '1',
    };
    await pubSub.publish(topic, payload);
    return true;
  }

  @Subscription({
    topics: ({ args }) => args.topic,
  })
  subscriptionWithFilterToDynamicTopic(
    @Arg('topic') topic: string,
    @Root() { senderId, userId, message }: NotificationPayload
  ): NotificationType {
    return { id: userId, message, date: new Date() };
  }
}
