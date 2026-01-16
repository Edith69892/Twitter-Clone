import React from 'react'
import { useState } from 'react'
import "../Home/Navbar.css"

function Navbar() {
    const [active, setActive] = useState("For You");
    return (
        <div className='navbar'
        >
            <div className='nav-items' onClick={() => setActive("For You")}>
                <div className="nav-text">
                    <span>For You</span>
                    {active === "For You" && <div className='active-line'></div>}
                </div>
            </div>
            <div className='nav-items' onClick={() => setActive("following")}>
                <div className="nav-text">
                    <span>Following</span>
                    {active === "following" && <div className='active-line'></div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
