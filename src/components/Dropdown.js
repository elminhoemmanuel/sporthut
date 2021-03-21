import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isopen, toggle}) => {
    return (
        <div className={isopen ? 'grid grid-rows-3 text-center items-center bg-yellow-500'
        : 'hidden'} onClick={toggle}>
            <Link className="p-4" to='/'>Home</Link>
            <Link className="p-4" to='/menu'>Menu</Link>
            <Link className="p-4" to='/about'>About</Link>   
        </div>
    )
}

export default Dropdown
