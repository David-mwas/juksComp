import React from 'react'
import NavItem from './NavItem'

import {faHouse,faStar,faBolt,faExclamationTriangle, faGrip} from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <div className='flex flex-col items-start justify-center px-5'>
        <h1 className='mb-6 mt-2 bg-gray-500 px-2 font-bold text-white'>Jukwaa</h1>
        <div>
            <NavItem icon={faHouse} title="house"/>
            <NavItem icon={faGrip} title="categories"/>
            <NavItem icon={faStar} title="New Post"/>
            <NavItem icon={faBolt} title="Trending Posts"/>
            <NavItem icon={faExclamationTriangle} title="Reports"/>

           
        </div>
    </div>
  )
}

export default SideBar