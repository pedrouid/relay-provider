import JsonRpcProvider from '@json-rpc-tools/provider';

export class RelayProvider extends JsonRpcProvider {
  constructor(rpcUrl: string) {
    super(rpcUrl);
    // TODO: handle relay specific methods
  }
}

export default RelayProvider;
