import React from 'react'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

const Home = () => {
    return (
        <div>
            <div className='h-[90%] flex'>
                <Sidebar />
            </div>
            <Player />
        </div>
    )
}

export default Home