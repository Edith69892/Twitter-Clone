import React from 'react'
import Navbar from './Navbar'
import RightBar from '../RIghtBar/RIghtBar'
import "../Home/Home.css"

function Home() {
    return (
        <div className='home-container'>
            <div className='feed-container'>
                    <div>
                        <Navbar />
                    </div>
                    <div className='posts-container'>
                        {/* Posts will go here */}
                        </div>
            </div>
            <div className='rightBar'>
                <RightBar />
            </div>
        </div>
    )
}

export default Home
