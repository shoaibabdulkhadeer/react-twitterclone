import React from 'react'
import {FaRegComment} from 'react-icons/fa';
import {FaRetweet} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';
import {ImShare} from 'react-icons/im';
import {AiOutlineDown} from 'react-icons/ai';
import '../styles/home.css'


// Destructuring
const Post = ({image,user,Id,time,para,comment,retweet,likes,shares}) => {


  return (
    <>

     {/* Posted rows */}
     <div className='posted'>
              <div className='image'>
                <img src={image} alt="" width={120}/>
              </div>

              <div className='content'>
                     <div className='userDetails'>
                                 <div className='userinfo'>
                                  <h3 className='username'>{user}</h3>
                                  <img src="/images/twwww.png" alt="/" />
                                  <p className='name'> {Id}</p>
                                  <p className='sec'>{time}</p>
                     
                                 </div>

                              
                                   <p className='drop'><AiOutlineDown size={18}/></p>
                              
                       </div>

                       <p className='para'>{para}</p>

                       <div className='reactions'>
                             <p className='p'><FaRegComment size={18}/> {comment} </p>
                             <p className='p'><FaRetweet size={18}/> {retweet}</p>
                             <p className='p'><AiFillHeart size={18}/> {likes}</p>
                             <p className='p'><ImShare size={18} /> {shares}</p>
                       </div>
              </div>

        </div>
        


    </>
  )
}

export default Post