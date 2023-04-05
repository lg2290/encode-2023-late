import '../styles/global.css'
import { EthereumClient } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import {  goerli,polygonMumbai} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public'
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitSiweNextAuthProvider ,GetSiweMessageOptions} from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
import {
  getDefaultWallets,
  RainbowKitProvider,darkTheme 
} from '@rainbow-me/rainbowkit';

// Configure chains & providers
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'Crypto Price Chanllenge',
  chains
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Sign in to Crypto Price Challenge',
});

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: connectors,
  provider,
  
})
function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <WagmiConfig client={client}>
    <SessionProvider refetchInterval={0} session={pageProps.session}>

<RainbowKitSiweNextAuthProvider
getSiweMessageOptions={getSiweMessageOptions}
>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>

<Component {...pageProps} /></RainbowKitProvider></RainbowKitSiweNextAuthProvider>
</SessionProvider></WagmiConfig>
  )
}

export default App
