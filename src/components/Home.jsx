import React from 'react'
import '../styles/home.css'
import { MdAddPhotoAlternate } from 'react-icons/md';
import {MdOutlineGifBox} from 'react-icons/md';
import {GrEmoji} from 'react-icons/gr';
import {TbCalendarTime} from 'react-icons/tb';
import {TiMessageTyping} from 'react-icons/ti';
import {BsStars} from 'react-icons/bs';
import Post from './Post';








const Home = () => {


  let datas = [
    {
      image:'/images/cr.jpg',
      user:"Cristiano Ronaldo",
      Id:"@Cristiano",
      time:"10 sec",
      para:"Always believe until the end! Vamos!!💪🏼💛💙 ",
      comment:"5,061",
      retweet:"23.3K",
      likes:"265.6K",
      shares:"10.9M"
    },

 {image:'/images/Tate.webp',
   user:"Tate4125",
   Id:"@Tate4125",
   time:"4 sec",
   para:"What color is your Bugatti?",
   comment:"1,061",
   retweet:"13.3K",
   likes:"15.6K",
   shares:"55K"
},{
  image:'/images/john.avif',
  user:"Shoaib231",
  Id:"Shoaib231",
  time:"2 sec",
  para:"Ok cool, I should get a Mac 😎",
  comment:"54",
  retweet:"23",
  likes:"265",
  shares:"5"
}
]
  return (
    <div className='home'>

      <div className='firstRow'>
      <h3 className='title'>Home</h3>
      <BsStars size={35} style={{color:'lightskyblue'}}/>
      </div>
  
         <div className='post'>

          <img src="/images/cr7.jpg" alt="" />
         
         <form action="/" method="post">
          <div className='icons'>
             <MdAddPhotoAlternate size={30} style={{color:'lightskyblue'}} className="iconex"/>
             <MdOutlineGifBox size={30} style={{color:'lightskyblue'}} className="iconex"/>
             <TiMessageTyping size={30} style={{color:'lightskyblue'}} className="iconex"/>
             <GrEmoji size={30} style={{color:'lightskyblue'}} className="iconex"/>
             <TbCalendarTime size={30} style={{color:'lightskyblue'}} className="iconex"/>
          </div>
         
            <textarea name="" id="" cols="63" rows="6" placeholder='Whats happening?'></textarea>
            <button className='tweetbutt' type='submit'> Tweet</button> 
         </form>
         </div>


         {/* Post component */}
       {datas.map((data) => {
        return (
          <Post image={data.image} user={data.user} Id={data.Id} time={data.time} para={data.para} 
           comment = {data.comment} retweet= {data.retweet} likes = {data.likes} shares={data.shares}
          />
        )
       })}

      




      
 
    </div>
  )
}

export default Home