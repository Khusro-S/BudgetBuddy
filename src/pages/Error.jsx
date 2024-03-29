import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log("Error: ", error);
  return (
    <div className="flex justify-center items-center">
      <img src="src/assets/error.svg" alt="error image" className="w-1/2" />
      <div className="w-1/2 flex flex-col gap-10">
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
