// import wave from "../assets/wave.svg";
import { Link } from "react-router-dom";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  return (
    <div className="w-full relative h-40 overflow-hidden">
      <div className="z-20 flex gap-5 w-full justify-center items-center h-full absolute">
        <h4>Connect with me:</h4>
        <Link to="https://github.com/Khusro-S" target="_blank">
          <img src={github} alt="Link to github profile" className="w-8" />
        </Link>
        <Link to="https://www.linkedin.com/in/khusro-sakhi/" target="_blank">
          <img src={linkedin} alt="Link to linkedin profile" className="w-8" />
        </Link>
      </div>
      <div className="bg-[url('../src/assets/wave.svg')] bg-repeat-x absolute bottom-0 w-[6400px] h-36 animate-wave transfrom translate-x-0 translate-y-0 z-0" />
      <div className="bg-[url('../src/assets/wave.svg')] bg-repeat-x absolute -bottom-4 w-[6400px] h-36 transfrom translate-x-0 translate-y-0 opacity-100  animate-swell z-0" />
    </div>
    // <>
    //   <img src={wave} alt="" className=" w-full" />
    // </>
  );
}
