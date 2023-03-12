import React from 'react'
import '../styles/Sidebar.css'


const Sidebar = () => {

 let links = [
  {image:"/images/Home.png",title:"Home"},
  {image:"/images/hashtag.png",title:"Explore"},
  {image:"/images/bell.png",title:"Notification"},
  {image:"/images/email.png",title : "Message"},
  {image:"/images/bookmark-white.png",title : "Bookmarks"},
  {image:"/images/file.png",title:"Lists"},
  {image:"/images/avatar.png",title:"Profile"},
  {image:"/images/more.png",title : "More"}
 ]



  return (
    <div className='sidebar'> 
         <div className='twitter'>
         <img src="/images/twitter.png" alt=""  width={45} />
         </div>

        <div>
          <ul>
             {links.map((x)=> {
              return(
              <li><a href="/"> <img src={x.image} alt="/" width={25}/> {x.title} </a></li>
             )})}
          </ul>
        </div>
        
      <button className='tweetbut'> Tweet</button> 
    </div>
  )
}

export default Sidebar