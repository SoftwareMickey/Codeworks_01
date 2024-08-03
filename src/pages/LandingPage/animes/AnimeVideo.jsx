import { useEffect, useRef, useState } from 'react';

const VideoPlayer = () => {
    
  const videos = [
    '../../../../public/animation/mobile.mp4',
    '../../../../public/animation/mobile1.mp4',
    '../../../../public/animation/mobile2.mp4', 
  ];

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
            className="absolute w-[50%] h-[90vh] object-cover pointer-events-none sm:w-full sm:h-[50vh]"
            autoPlay 
            muted 
            playsInline>
              <source src={videos[currentVideoIndex]} type="video/mp4"/>
            </video>
    </div>
  );
};

export default VideoPlayer;
