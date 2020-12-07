import JsonRpcProvider from '@json-rpc-tools/provider';

export class RelayProvider extends JsonRpcProvider {
  constructor(rpcUrl: string) {
    super(rpcUrl);
  }
}

export default RelayProvider;
