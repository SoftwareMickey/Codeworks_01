import './AnimationVideo.css';

export default function AnimationVideo({vidaa}){
  return (
    <div>
      <video className="absolute w-[50%] h-[90vh] object-cover pointer-events-none sm:w-full sm:h-[50vh] sm:w-full" autoPlay loop muted playsInline>
        <source src={vidaa} type="video/mp4"/>
      </video>
    </div>
  );
}
