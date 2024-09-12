import { useRef, useState } from "react";
import meal from "../../assets/meal.mp4";
import "./Intro.css";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
export default function Intro() {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  function handleWithVideo() {
    setPlayVideo(!playVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    return;
  }

  return (
    <div className="restaurant__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div
        className="restaurant__video-overlay"
        onClick={() => handleWithVideo()}
      >
        <div className="restaurant__video-overlay-circle">
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}
