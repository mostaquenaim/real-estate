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
                className='relative rounded-full cursor-pointer shadow-lg transition-colors duration-300'
                aria-label="Chat with us on Messenger"
            >
                {/* Messenger Icon */}
                <img src={'/messenger-external.png'} className='w-16 h-16 rounded-4xl' alt="Messenger Chat" />
                
                {/* Tooltip */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Chat with us on Messenger
                </div>
            </button>
        </div>
    );
};

export default Facebook;
