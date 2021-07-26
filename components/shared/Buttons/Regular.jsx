import { classNames } from '../../../utils/class-names'

export const RegularButton = ({
  children,
  isProcessing,
  isDisabled,
  ...props
}) => {
  let btnClass =
    'bg-blue-600 focus:border-blue-700 text-white hover:bg-blue-500'
  if (isProcessing) {
    btnClass = 'bg-blue-500 focus:border-opacity-0 text-white'
  }
  if (isDisabled) {
    btnClass = 'bg-gray-500 focus:border-opacity-0 text-gray-800'
  }

  return (
    <button
      type='button'
      className={classNames(
        'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition ease-in-out duration-150',
        btnClass,
        isProcessing || isDisabled ? 'cursor-not-allowed' : ''
      )}
      disabled={isProcessing || isDisabled}
      {...props}
    >
      {isProcessing && (
        <svg
          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      )}
      {children}
    </button>
  )
}
