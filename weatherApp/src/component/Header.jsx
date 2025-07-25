import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
    const { darkTheme, toggleTheme } = useContext(ThemeContext)

    function swithTheme() {
        toggleTheme()
    }

    return (
        <div>
            <nav className='h-20 w-screen bg-gray-500 flex justify-between px-20 items-center'>
                <div>
                    <h1>logo</h1>
                </div>
                <div className='flex'>
                    <ul className='flex'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/weather'}>Weather</Link></li>
                    </ul>
                    <button onClick={swithTheme} >
                        {darkTheme ? "🌙" : "☀️"}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header