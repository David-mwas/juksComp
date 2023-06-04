import React from 'react'
import NavItem from './NavItem'
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faHouse, faStar,faBolt,faExclamationTriangle, faGrip} from '@fortawesome/free-solid-svg-icons';

import TrendingItem from './TrendingItem';
import NewProject from './NewProject';
import { FaBolt, FaExclamationTriangle, FaHome, FaStar, FaTable } from 'react-icons/fa';

function SideBar() {
  return (
    <div className='flex flex-col items-start justify-center'>
        <h1 className='mb-6 mt-2 bg-gray-500 font-bold text-white mx-5 px-7'>Jukwaa</h1>
        <Link href="/" className='w-[100%] px-5'>
      <div className='flex items-center p-1 my-2 space-x-3 hover:bg-[#e2ca69] w-[100%]'>
        <FaHome className='w-5 h-5 text-gray-400'/>
         <p className='text-sm text-gray-500'>House</p>
    </div>
    </Link>
    
        <div className='mb-[30px] w-[100%] px-5'>
            <NavItem icon={<FaTable/>} title="categories"/>
            <NavItem icon={<FaStar/>} title="New Post"/>
            <NavItem icon={<FaBolt/>} title="Trending Posts"/>
            <NavItem icon={<FaExclamationTriangle/>} title="Reports"/>

           
        </div>
        <div className='h-[1px] bg-[#e2ca69] w-[100%] mb-3'></div>
        <div className='w-[100%] px-5'>
          <h2 className='font-extrabold text-gray-800 mb-5'>Trending Today <span className='text-sm text-white bg-slate-600 px-2 rounded-full'>23</span></h2>
          <TrendingItem src="img" text={["Building house project","23,345 comments"]}
          />  
          <TrendingItem src="img" text={["Women Relief Initiative","11,156 comments"]}
          />  
          <TrendingItem src="img" text={["Husler Funds","3,687 comments"]}
          />  
        </div>
        {/* <div className='h-[1px] bg-[#e2ca69] w-[100%] mb-3'></div> */}
        <div className='w-[100%] px-5'>
        <h2 className='font-extrabold text-gray-800 mb-5'>New Projects <span className='text-sm text-white bg-slate-600 px-2 rounded-full'>23</span></h2>
          <NewProject src="img" text={["Building houses project","23,345 comments"]}
          />  
          <NewProject src="img" text={["Women Relief Initiative","11,156 comments"]}
          />  
          <NewProject src="img" text={["Husler Funds","3,687 comments"]}
          />  
        </div>
    </div>
  )
}

export default SideBar