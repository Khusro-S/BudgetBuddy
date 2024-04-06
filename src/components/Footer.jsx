import wave from "../assets/wave.svg";

export default function Footer() {
  return (
    <div className="w-full relative h-36 overflow-hidden">
      <div className="bg-[url('src/assets/wave.svg')] bg-repeat-x absolute bottom-0 w-[6400px] h-36 animate-wave transfrom translate-x-0 translate-y-0" />
      <div className="bg-[url('src/assets/wave.svg')] bg-repeat-x absolute -bottom-4 w-[6400px] h-36 transfrom translate-x-0 translate-y-0 opacity-100  animate-swell" />
    </div>
    // <>
    //   <img src={wave} alt="" className=" w-full" />
    // </>
  );
}
