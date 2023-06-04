'use client'
import React, { useState } from 'react'
import PostBox from './PostBox'
import Comments from './Comments'
import PostCategory from './PostCategory'
function PostContent() {
  const [active, setActive] = useState(false)
  const toogle =()=>{

    setActive(!active)
    
  }
  return (
    <div className='flex-col ml-2 h-screen w-[100%]'>
   
      <div className='flex relative'>
      <div className=' h-screen ml-2 scroll-container overflow-y-scroll scrollbar-thin scrollbar-thumb-200-500 scrollbar-track-gray-200 flex-1'>
      <div className=''><PostCategory/></div>
     <PostBox  
       profile="img"
       text={["Public Transport Authority","26 min ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="img"
       text={["Kakamega County Government","1 day ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="img"
       text={["Kakamega County Government","1 day ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="img"
       text={["Kakamega County Government","1 day ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="img"
       text={["Kakamega County Government","1 day ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="img"
       text={["Kakamega County Government","1 day ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
       <PostBox  
       profile="img"
       text={["Kakamega County Government","1 day ago"]} 
       title="This is a New project title"
        p={["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non totam suscipit laborum nesciunt aliquam corporis veritatis molestias architecto, inventore voluptate similique explicabo voluptatem vitae sequi? Natus asperiores consequuntur eaque!"
        ,
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil aut eos vel ipsum earum omnis molestias. Ad, reiciendis quaerat."
        ]}
        media="media"
        likes="16,578"
        dislikes="253"
        comments="342"
        func={toogle}
        />
     </div>

     <div className={`h-screen ml-2 overflow-y-scroll  transition-all ease-in-out duration-[1s] w-[34%] ${active ? "translate-x-[100%]" : "translate-x-[0]"}`} >
     <Comments/>
    </div>
  
      </div>
    </div>
  )
}

export default PostContent