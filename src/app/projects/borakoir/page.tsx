import ShowProject from '@/components/ShowProject';
import React from 'react';

const Borakoir = () => {
    const projectData = {
        title: "Nawabganj Premium Heights",
        location: "Nawabganj, Dhaka",
        description: "An exclusive gated community featuring premium residential plots with modern amenities and 24/7 security. Perfect for those seeking a peaceful yet connected lifestyle in one of Dhaka's most promising locations.",
        landSize: "25 Acres",
        plotSizes: "3-10 Decimal (also 3,5,10 Katha)",
        features: [
            "24/7 Security with CCTV",
            "Landscaped Gardens",
            "Underground Electricity",
            "Wide Paved Roads",
            "Community Center",
            "Mosque",
            "Children's Play Area"
        ],
        images: [
            "/projects/nawabganj/1.jpg",
            "/projects/nawabganj/2.jpg",
            "/projects/nawabganj/3.jpg",
            "/projects/nawabganj/4.jpg"
        ],
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=...",
        contactNumber: "+8801712345678"
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            under construction
        </div>
    );
};

export default Borakoir;