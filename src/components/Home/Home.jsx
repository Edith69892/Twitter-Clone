import React from 'react'
import Navbar from './Navbar'
import RightBar from '../RIghtBar/RIghtBar'
import "../Home/Home.css"
import userLogo from "../../assets/userLogo1.jpg"
import Avatar from '../Avatar/Avatar.jsx'

function Home() {
    return (
        <div className='home-container'>
            <div className='feed-container'>
                    <div>
                        <Navbar />
                    </div>
                    <div className='posts-container'>
                        <div className='add-post'>
                            <div className='avatar'>
                                 <Avatar imgUrl={userLogo}/>
                            </div>
                            <div className='tweet'>
                            <textarea placeholder="What's happening?" rows="3"></textarea>
                            <div className='post-options'>
                                {/* img icon */}
                                <button>Post</button>
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
            <div className='rightBar'>
                <RightBar />
            </div>
        </div>
    )
}

export default Home
