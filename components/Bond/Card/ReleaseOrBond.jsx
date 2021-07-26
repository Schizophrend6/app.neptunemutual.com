import { useWeb3React } from '@web3-react/core'
import { hasValue } from '../../../utils/big'

export const ReleaseOrBond = ({ onRelease, onBond, info }) => {
  const { active } = useWeb3React()

  if (!active || !hasValue(info.allowance)) {
    return null
  }

  if (!hasValue(info.bonded)) {
    return (
      <button
        className='px-6 py-1 rounded-md bg-blue-500 text-white'
        onClick={onBond}
      >
        Bond
      </button>
    )
  }

  return (
    <div className='flex gap-2'>
      <button
        className='px-6 py-1 rounded-md bg-blue-500 text-white'
        onClick={onRelease}
      >
        Release
      </button>
      <button
        className='px-3 py-1 rounded-md bg-blue-500 text-white'
        onClick={onBond}
      >
        +
      </button>
    </div>
  )
}
