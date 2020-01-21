import { App, Duration, Stack, StackProps } from '@aws-cdk/core';
import { Topic } from '@aws-cdk/aws-sns';
import { Queue } from '@aws-cdk/aws-sqs';
import { SqsSubscription } from '@aws-cdk/aws-sns-subscriptions';

export class Repro5885 extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new Queue(this, 'SQSQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new Topic(this, 'SNSTopic')
    topic.addSubscription(new SqsSubscription(queue));
  }
}
