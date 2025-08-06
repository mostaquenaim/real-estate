'use client'
import React from 'react';

const Facebook = () => {
    const messengerLink = 'm.me/639110919296610';
    
    const handleClick = () => {
        window.open(`https://${messengerLink}`, '_blank');
    };

    return (
        <div className='fixed bottom-5 right-5 z-40'>
            <button 
                onClick={handleClick}
                className='text-white rounded-full cursor-pointer shadow-lg transition-colors duration-300'
                aria-label="Chat with us on Messenger"
            >
                {/* Messenger icon - you can use an SVG or emoji */}
                <img src={'/messenger.png'} className='w-10 h-10' />
            </button>
        </div>
    );
};

export default Facebook;