import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#020e32] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer mt-7'>
                    <img className='w-6' src="https://i.ibb.co/T58Vzvx/home-1.png" alt="home" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer mt-7 mb-7'>
                    <img className='w-6' src="https://i.ibb.co/whm6Z608/search-1.png" alt="search" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#020e32] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src="https://i.ibb.co/Y7VZ2Zvt/library-1.png" />
                        <p className='font-bold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-6' src="https://i.ibb.co/BVybjN3t/arrow.png" alt="arrow" />
                        <img className='w-6' src="https://i.ibb.co/ZzH43QQg/plus.png" alt="plus" />
                    </div>
                </div>
                <div className='p-4 bg-[#171d42] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>Curate your perfect mix!</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#171d42] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Let the music find you</h1>
                    <p className='font-light'>Find new songs and artists tailored just for you.</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Discover Music</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar