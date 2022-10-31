import React from 'react'
import aa1 from '../public/aa1.jpeg'
import aa2 from '../public/aa2.jpeg'
import aa3 from '../public/aa3.jpeg'
import aa4 from '../public/aa4.jpeg'
import aa5 from '../public/aa5.webp'
import aa6 from '../public/aa6.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={aa1} />
            <InstagramImg socialImg={aa2} />
            <InstagramImg socialImg={aa3} />
            <InstagramImg socialImg={aa4} />
            <InstagramImg socialImg={aa5} />
            <InstagramImg socialImg={aa6} />            
        </div>
    </div>
)
}

export default Instagram