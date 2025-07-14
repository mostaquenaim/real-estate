'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import InitialLoading from './InitialLoading';

const InitialPage = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/home')
        }, 3200);
    }, [])
    return (
        <div
        // className='h-96' style={{ backgroundImage: `url('/backgrounds/real-estate-circle-buildings.jpg')` }}
        >
            {/* <div className='min-h-screen flex items-center justify-center'>
                <img
                    src={'/backgrounds/real-estate-circle-buildings.jpg'} className='h-48 w-48' />
            </div> */}
            <InitialLoading />
        </div>
    );
};

export default InitialPage;