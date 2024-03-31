import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center max-md:flex-col">
      <img
        src="src/assets/notFound.svg"
        alt="Error 404: page not found image"
        className="w-1/2 -mt-16 max-md:w-[60%] max-md:-mt-3"
      />
      <div className="w-1/2 flex flex-col gap-10 max-md:w-full">
        <h1>Uh oh! We&apos;ve got a problem &#41;&apos;:</h1>
        <h4> Error 404: Page Not Found </h4>
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
