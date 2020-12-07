import RelayProvider from '../src';

const TEST_RPC_URL = 'wss://staging.walletconnect.org';

describe('RelayProvider', () => {
  it('init', async () => {
    const provider = new RelayProvider(TEST_RPC_URL);
    expect(provider).toBeTruthy();
  });
});
