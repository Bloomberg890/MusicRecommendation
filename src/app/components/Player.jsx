import React from 'react'

const Player = () => {
    return (
        <div className='h-[10%] bg-[#020e32] flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src="https://i.ibb.co/q3KD6XyF/albumcover.png" alt="" />
                <div>
                    <p className='font-bold'>Song Title</p>
                    <p>Random Artist</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-1 flex-1'>
                <div className='flex items-center gap-3'>
                    <img className='cursor-pointer w-11' src="https://i.ibb.co/wZ6xjhJH/shuffle.png" alt="shuffle" />
                    <img className='cursor-pointer w-11' src="https://i.ibb.co/gbnZ0jTt/prev.png" alt="previous" />
                    <img className='cursor-pointer w-13' src="https://i.ibb.co/twD4xHN9/Screenshot-2025-03-10-220043-1.png" alt="play" />
                    <img className='cursor-pointer w-11' src="https://i.ibb.co/MkxXKk1d/next.png" alt="next" />
                    <img className='cursor-pointer w-11' src="https://i.ibb.co/xSnnm5y5/loop.png" alt="loop" />
                </div>
            </div>

        </div>
    )
}

export default Player