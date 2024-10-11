import { useEffect, useRef, useState } from 'react';

import video1 from '../../../../public/animation/mobile.mp4';
import video2 from '../../../../public/animation/mobile1.mp4';
import video3 from '../../../../public/animation/mobile2.mp4';

const VideoPlayer = () => {
    
  // const videos = [
  //   '../../../../public/animation/mobile.mp4',
  //   '../../../../public/animation/mobile1.mp4',
  //   '../../../../public/animation/mobile2.mp4', 
  // ];

  const videos = [video1, video2, video3]

  const videoRef = useRef();

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]); 

  return (
    <div>
        <video 
            ref={videoRef}
            onEnded={handleVideoEnd} 
            className="absolute ml-10 w-[24%] h-[80vh] shadow-custom-medium object-cover bottom-10 rounded pointer-events-none sm:w-full sm:h-[50vh]"
            autoPlay 
            muted 
            playsInline>
              <source src={videos[currentVideoIndex]} type="video/mp4"/>
            </video>
    </div>
  );
};

export default VideoPlayer;
