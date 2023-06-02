import React from 'react'
import NavItem from './NavItem'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faStar,faBolt,faExclamationTriangle, faGrip} from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <div className='flex flex-col items-start justify-center px-5'>
        <h1 className='mb-6 mt-2 bg-gray-500 px-2 font-bold text-white'>Jukwaa</h1>
        <Link href="/">
      <div className='flex items-center p-1 my-2 space-x-3 hover:bg-[#e2ca69]'>
         <FontAwesomeIcon icon={faHouse} className='w-5 h-5 text-gray-400'/>
         <p className='text-sm text-gray-500'>House</p>
    </div>
    </Link>
        <div>
            <NavItem icon={faGrip} title="categories"/>
            <NavItem icon={faStar} title="New Post"/>
            <NavItem icon={faBolt} title="Trending Posts"/>
            <NavItem icon={faExclamationTriangle} title="Reports"/>

           
        </div>
    </div>
  )
}

export default SideBar