import { RelayJsonRpc } from './types';

export function isSubscribeParams(
  params: any
): params is RelayJsonRpc.SubscribeParams {
  return 'topic' in params && 'ttl' in params;
}

export function isPublishParams(
  params: any
): params is RelayJsonRpc.PublishParams {
  return 'message' in params && 'topic' in params && 'ttl' in params;
}

export function isUnsubscribeParams(
  params: any
): params is RelayJsonRpc.UnsubscribeParams {
  return 'id' in params;
}

export function isSubscriptionParams(
  params: any
): params is RelayJsonRpc.SubscriptionParams {
  return 'id' in params && 'data' in params;
}
