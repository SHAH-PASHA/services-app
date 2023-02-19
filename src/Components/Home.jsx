import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1> M1-services </h1>
            <p>We provide solution to your business to grow more and reach more...</p>
         </main>
    </div>
    
    <div className='home2'>
        <img src="https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2020/10/6-must-know-tips-for-effective-team-management-.jpg" alt=''/>
        <div>
            <p>
                Some content regarding your services
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who we are</h1>
            <p>
                
            </p>
        </div>
    </div>

    <div className='home4' id='brands'>
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{animateDelay:"0.3s"}}>
                 <AiFillGoogleCircle/>
                 <p>Google</p>
            </div>
            <div style={{animateDelay:"0.5s"}}>
                 <AiFillAmazonCircle/>
                 <p>Amazon</p>
            </div>
            <div style={{animateDelay:"0.7s"}}>
                 <AiFillYoutube/>
                 <p>Youtube</p>
            </div>
            <div style={{animateDelay:"0.9s"}}>
                 <AiFillInstagram/>
                 <p>Instagram</p>
            </div>
        </article>
    </div>
    </div>
    </>
  )
}

export default Home