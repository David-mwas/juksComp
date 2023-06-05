import React from 'react'
import { FaCamera, FaImage, FaPinterest, FaSmile } from 'react-icons/fa'
import NewProject from './NewProject'
import CommentItem from './CommentItem'

function Comments() {
  return (
    <div className='scroll-container border border-gray-200 ml-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-200-500 scrollbar-track-gray-200 h-screen py-3 px-4'>
       <div className='flex items-center justify-between space-x-2 px-2 pt-5'>
        <img src="/assets/face.jpeg" alt="profile" className='w-[50px] h-[50px] rounded-full'/>
        <input type="text" placeholder='Whats on your mind' className='w-[80%] border border-gray-500 flx-1 rounded-full p-2 outline-none'/>
       </div>
       <div className='flex items-center justify-between space-x-2 px-2 pt-5'>
        <div className='flex space-x-3 text-gray-500'>
          <FaSmile/>
          <FaImage/>
          <FaPinterest/>
          <FaCamera/>
        </div>
        <button className='bg-gray-500 font-bold text-white px-5 py-1 rounded-sm'>POST</button>
       </div>
       <div>
        <h2 className='font-extrabold text-gray-600 mb-5 mt-6'>Comments</h2>
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          <CommentItem 
          src="img"
           name="Grace Njeri" 
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
           time="3 hours ago"
            likes="24"
            dislikes="3"
            replies="42"
          />  
          
          
       </div>
    </div>
  )
}

export default Comments