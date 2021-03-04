import { RelayJsonRpc } from './types';

export const RELAY_JSONRPC: { [protocol: string]: RelayJsonRpc.Methods } = {
  bridge: {
    info: 'bridge_info',
    connect: 'bridge_connect',
    disconnect: 'bridge_disconnect',
    publish: 'bridge_publish',
    subscribe: 'bridge_subscribe',
    subscription: 'bridge_subscription',
    unsubscribe: 'bridge_unsubscribe',
  },
  waku: {
    info: 'waku_info',
    connect: 'waku_connect',
    disconnect: 'waku_disconnect',
    publish: 'waku_publish',
    subscribe: 'waku_subscribe',
    subscription: 'waku_subscription',
    unsubscribe: 'waku_unsubscribe',
  },
};
