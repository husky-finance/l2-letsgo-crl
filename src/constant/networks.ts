import { Network } from '../types'

// sorted by chainId
export const Binance: Network = {
  name: 'Binance Smart Chain Mainnet',
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrl: 'https://bscscan.com',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'bnb',
    decimals: 18
  },
  chainId: 56
}

export const xDai: Network = {
  name: 'xDai Mainnet',
  rpcUrls: ['https://rpc.xdaichain.com/'],
  blockExplorerUrl: 'https://blockscout.com/xdai/mainnet',
  nativeCurrency: {
    name: 'xDai',
    symbol: 'xDai',
    decimals: 18
  },
  chainId: 100
}

export const Sokol: Network = {
  name: 'Sokol Testnet',
  rpcUrls: ['https://sokol.poa.network/'],
  blockExplorerUrl: 'https://blockscout.com/poa/sokol',
  nativeCurrency: {
    name: 'SPOA',
    symbol: 'SPOA',
    decimals: 18
  },
  chainId: 77
}

export const Matic: Network = {
  name: 'Matic Mainnet',
  rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
  blockExplorerUrl: 'https://explorer.matic.network/',
  nativeCurrency: {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18
  },
  chainId: 137
}

export const Avalanche: Network = {
  name: 'Avalanche Mainnet C-Chain',
  chainId: 43114,
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrl: 'https://cchain.explorer.avax.network/'
}

export const ArbitrumTestnet: Network = {
  name: 'Arbitrum (Kovan)',
  rpcUrls: ['https://kovan4.arbitrum.io/rpc'],
  blockExplorerUrl: 'https://explorer.arbitrum.io/#/',
  chainId: 212984383488152
}

export const OptimisticTestnet: Network = {
  name: 'Optimistic - Kovan',
  rpcUrls: ['https://kovan.optimism.io'],
  blockExplorerUrl: 'https://kovan-l2-explorer.surge.sh',
  chainId: 69
}

export const OptimisticMainnet: Network = {
  name: 'Optimistic - Mainnet',
  rpcUrls: ['https://mainnet.optimism.io'],
  blockExplorerUrl: 'https://mainnet-l2-explorer.surge.sh',
  chainId: 10
}
