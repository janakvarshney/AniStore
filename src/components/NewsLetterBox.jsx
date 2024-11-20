import React from 'react'

const NewsLetterBox = () => {
        const onSubmitHandler = (event)=>{
                event.preventDefault();
        }


  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe and get 20% off!!</p>
        <p className='text-gray-400 mt-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, beatae.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 border flex items-center gap-3 mx-auto pl-3 my-6'> 
                <input className='w-full' type="email" placeholder='Enter your email'  required />
                <button type='submit' className='bg-black text-white py-4 px-10 text-xs' >Submit</button>
        </form>
    </div>
  )
}

export default NewsLetterBox