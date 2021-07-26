import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

import { wrapperInjectedConnector } from '../utils/blockchain/connectors'

export const useInactiveListener = (suppress = false) => {
  const { active, error, activate } = useWeb3React()

  useEffect(() => {
    const { ethereum } = window
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      console.log('Registering events ...')

      const createEventListener = (ev) => {
        return (info) => {
          console.log(`Handling '${ev}' event`, info)
          activate(wrapperInjectedConnector)
        }
      }

      const handleConnect = createEventListener('connect')
      const handleChainChanged = createEventListener('chainChanged')
      const handleAccountsChanged = createEventListener('accountsChanged')
      const handleNetworkChanged = createEventListener('networkChanged')

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}
