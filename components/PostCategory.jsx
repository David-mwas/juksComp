import React from 'react'

function PostCategory() {
  return (
    <div className='flex items-center space-x-5 mb-[10px]  ml-2'>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1'>
            <h3>All</h3>
        </div>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1 bg-gray-500 text-white'>
            <h3>Housing</h3>
        </div>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1'>
            <h3>Roads</h3>
        </div>
        <div className='border-[2px] border-grey-800 rounded-full px-5 py-1'>
            <h3>Hospitals</h3>
        </div>
    </div>
  )
}

export default PostCategory