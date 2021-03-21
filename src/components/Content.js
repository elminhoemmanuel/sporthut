import React from 'react'
import imageOne from '../images/sport-3.jpg'
import imageTwo from '../images/sport-2.jpg'

const Content = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={imageOne} alt='ball and boot' className='h-full rounded mb-20 shadow w-4/5 md:w-1/3 '/>
                <div className="center-content">
                        <h2 className="text-2xl mb-2">Mercurial Boot and Ball</h2>
                        <p className="mb-2">Comfortable and well designed mercurial boots</p>
                        <span>NGN 20000</span>
                </div>
            </div>

            <div className='menu-card'>
                <img src={imageTwo} alt='ball and boot' className='h-full rounded mb-20 shadow w-4/5 md:w-1/3'/>
                <div className="center-content">
                        <h2 className="text-2xl mb-2">Mercurial Boot</h2>
                        <p className="mb-2">Comfortable and well designed mercurial boots</p>
                        <span>NGN 15000</span>
                </div>
            </div>
        </>
    );
};

export default Content
