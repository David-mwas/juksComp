import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
function NavItem({icon,title}) {
  return (
   <Link href={`/nav/${title}`} title={title}>
    <div className='flex items-center p-1 my-2 space-x-3 hover:bg-[#e2ca69]'>
         <FontAwesomeIcon icon={icon} className='w-5 h-5 text-gray-400'/>
         <p className='text-sm text-gray-500'>{title}</p>
    </div>
   </Link>
  )
}

export default NavItem