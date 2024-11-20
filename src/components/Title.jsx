import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className=' inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500'>{text1} <span className='text-gray-800 font-medium'>{text2}
      </span>
      </p>
      <p className='w-8 sm:w-12 sm:h-[-2px] h-[1px]'>

      </p>

    </div>
  )
}

export default Title