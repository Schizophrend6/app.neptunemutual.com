import { useWeb3React } from '@web3-react/core'
import { hasValue } from '../../../utils/big'

const StakeUnstakeButtons = ({ openModal, modalTypes, data }) => {
  const { active } = useWeb3React()

  if (!active || !hasValue(data.allowance)) {
    return null
  }

  if (!hasValue(data.staked)) {
    return (
      <button
        className='px-6 py-1 rounded-md bg-blue-500 text-white'
        onClick={() => openModal(modalTypes.STAKE)}
      >
        Farm
      </button>
    )
  }

  return (
    <div className='flex gap-2 mt-2 justify-between'>
      <button
        className='px-5 py-2 leading-none rounded-md text-lg font-bold bg-blue-500 text-white'
        onClick={() => openModal(modalTypes.STAKE)}
      >
        +
      </button>
      <button
        className='px-5 py-2 leading-none rounded-md text-lg font-bold bg-blue-500 text-white'
        onClick={() => openModal(modalTypes.UNSTAKE)}
      >
        -
      </button>
    </div>
  )
}

export default StakeUnstakeButtons
