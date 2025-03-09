import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#02113d] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer mt-7'>
                    <img className='w-6' src="https://i.ibb.co/T58Vzvx/home-1.png" alt="home" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer mt-7 mb-7'>
                    <img className='w-6' src="https://i.ibb.co/whm6Z608/search-1.png" alt="search" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#02113d] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8' src="https://i.ibb.co/DfnZcLs3/library-1.png" />
                        <p className='font-bold'>Your Library</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar