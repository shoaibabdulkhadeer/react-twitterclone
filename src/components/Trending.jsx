import React from 'react'
import '../styles/Trending.css'
import { FaSearch} from 'react-icons/fa';


const Trending = () => {
  return (
    <div className='Trending'>
              
         <div className='bar'>
          <FaSearch className='icon'/>
         <input className='search' type="text" placeholder='Search Twitter' />
          </div> 

        

              <div className='Trends'>
                   <p>Trends For You</p>
            </div> 
             
            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#codeaddict</p>
            </div> 



            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#instagram</p>
            </div> 
            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#reactjs</p>
            </div> 
            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#twitter</p>
            </div> 
            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#Vscode</p>
            </div> 

            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#ronaldo</p>
            </div> 
            <div className='Trends2'>
                   <p className='light'>Trending</p>
                   <p className='hashtag'>#comedy</p>
            </div> 
            
            <div className='more'>
                   <a href="/">Show more</a>
            </div> 


    </div>
  )
}

export default Trending