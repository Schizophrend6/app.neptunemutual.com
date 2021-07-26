import { useRouter } from 'next/router'
import {
  ROADMAP_URL,
  DOCUMENTATION_URL
} from '../../../../config/constants/external-links'
import { Links } from './links'
import { Illustration1 } from './Illustration1'
import { Illustration2 } from './Illustration2'
import { Illustration3 } from './Illustration3'

const ComingSoon = ({ children }) => {
  const router = useRouter()
  let Illustration = Illustration1

  if (router.pathname === '/cover') {
    Illustration = Illustration2
  }

  if (router.pathname === '/prediction-market') {
    Illustration = Illustration3
  }

  return (
    <div className='w-full h-full flex justify-center items-center py-12 px-4'>
      <div className='max-w-screen-sm text-center'>
        <div className='mx-auto mb-8 md:mb-12'>
          <Illustration className='max-w-full mx-auto' />
        </div>
        <p className='text-gray-400 text-lg'>
          Okie dokie. Turns out, this feature isn’t ready yet!
        </p>
        <h3 className='text-gray-300 text-3xl leading-normal md:text-4xl md:leading-normal'>
          Stay Tuned for the Latest
        </h3>
        <p className='text-gray-400 text-base'>
          Follow us on Github and other social channels to stay updated on our
          latest and greatest work. Check out our{' '}
          <a
            href={ROADMAP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400'
          >
            roadmap
          </a>{' '}
          and{' '}
          <a
            href={DOCUMENTATION_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400'
          >
            documentation
          </a>{' '}
          for more info. Send our admins a <em>friendly hello</em> on Telegram
          and keep the discussion going.
        </p>
        <Links />
      </div>
    </div>
  )
}

export default ComingSoon
