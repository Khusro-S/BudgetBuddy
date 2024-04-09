import { Link, useRouteError } from "react-router-dom";
import errorImage from "../assets/error.svg";

export default function Error() {
  const error = useRouteError();
  console.log("Error: ", error);
  return (
    <div className="flex justify-center items-center max-md:flex-col ">
      <img
        src={errorImage}
        alt="error image"
        className="w-1/2 max-sm:w-[60%]"
      />
      <div className="w-1/2 flex flex-col gap-10 max-md:gap-5 max-md:w-full">
        <h1>Uh oh! We&apos;ve got a problem &#41;&apos;:</h1>
        <p>{error.message || error.statusText}</p>
        <Link
          to="/"
          className="px-2 py-1 bg-primaryGreen text-white rounded hover:ring hover:ring-offset-2 hover:ring-primaryGreen transition-all ease-linear duration-200 place-self-center"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
