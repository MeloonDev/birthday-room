import { Howl } from "howler";
import { useState } from "react";
import ReactHowler from "react-howler";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

const Sound = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <ReactHowler src="./happy-birthday.mp3" playing={isMuted} loop={true} />
      <button onClick={() => setIsMuted(!isMuted)} className="btn">
        {isMuted ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
      </button>
    </>
  );
};
export default Sound;
