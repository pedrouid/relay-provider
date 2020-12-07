import { JsonRpcRequest } from '@json-rpc-tools/utils';

import { RelayJsonRpc } from './types';
import { assertType } from './misc';

export function parseSubscribeRequest(
  request: JsonRpcRequest
): RelayJsonRpc.SubscribeParams {
  const params = request.params as RelayJsonRpc.SubscribeParams;

  assertType(params, 'topic');
  assertType(params, 'ttl', 'number');

  return params;
}

export function parsePublishRequest(
  request: JsonRpcRequest
): RelayJsonRpc.PublishParams {
  const params = request.params as RelayJsonRpc.PublishParams;

  assertType(params, 'topic');
  assertType(params, 'message');
  assertType(params, 'ttl', 'number');

  return params;
}

export function parseUnsubscribeRequest(
  request: JsonRpcRequest
): RelayJsonRpc.UnsubscribeParams {
  const params = request.params as RelayJsonRpc.UnsubscribeParams;

  assertType(params, 'id');

  return params;
}

export function parseSubscriptionRequest(
  request: JsonRpcRequest
): RelayJsonRpc.SubscriptionParams {
  const params = request.params as RelayJsonRpc.SubscriptionParams;

  assertType(params, 'id');
  assertType(params, 'data');

  return params;
}
