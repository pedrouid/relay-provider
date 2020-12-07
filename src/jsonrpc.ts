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
};
