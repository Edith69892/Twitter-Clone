import React from 'react'
import "../FollowComponent/Follows.css"
import logo from "../../../assets/logo3.png"

function Follows({imgUrl, name, username}) {
    return (
        <div className='container'>
            <div className='image-container'>
                <img src={imgUrl} alt="avatar" />
            </div>
            <div className='info'>
                <div className='name'>{name}</div>
                <div className='username'>{username}</div>
            </div>
            <div className='follow-btn'>
                <button>
                Follow
            </button>
            </div>
        </div>
    )
}

export default Follows
