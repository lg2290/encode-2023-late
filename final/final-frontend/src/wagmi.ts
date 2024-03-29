import { w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import 'bootstrap/dist/css/bootstrap.min.css';

export const walletConnectProjectId = '561ad3cf4d7e96b0d15f55d4477cb8f1'

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
  [w3mProvider({ projectId: walletConnectProjectId })],
)

export const client = createClient({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
    version: 1,
  }),
  provider,
  webSocketProvider,
})

export { chains }
