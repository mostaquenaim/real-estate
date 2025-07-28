import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialPlatforms = ({
    classes="flex justify-center gap-6",
    iconStyle="",
    textSize = "3xl"
}) => {
    const hrefClass = `transition text-${textSize}`
    const iconClass = `transition duration-300 hover:scale-105 ${iconStyle}`
    return (
            <div className={classes}>
            <a
              href="https://www.facebook.com/profile.php?id=61578295138265"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-600 hover:text-blue-800 ${hrefClass}`}
            >
              <FaFacebook className={`hover:text-[#0d66ff] ${iconClass}`}/>
            </a>
            <a
              href="https://www.instagram.com/banglarchoyamodelcityltd/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-pink-500 hover:text-pink-700 ${hrefClass}`}
            >
              <FaInstagram className={`hover:text-[#f6016a] ${iconClass}`}/>
            </a>
            <a
              href="https://www.youtube.com/channel/UCHvv-Y2xwHS_2bve9ioFFbA"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-red-600 hover:text-red-800 ${hrefClass}`}
            >
              <FaYoutube className={`hover:text-[#ff0032] ${iconClass}`}/>
            </a>
            <a
              href="https://www.linkedin.com/company/banglar-choya-model-city-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-blue-700 hover:text-blue-900 ${hrefClass}`}
            >
              <FaLinkedin className={`hover:text-[#0c65c1] ${iconClass}`}/>
            </a>
          </div>
    );
};

export default SocialPlatforms;