import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="src/assets/notFound.svg"
        alt="Error 404: page not found image"
        className="w-1/2 -mt-16"
      />
      <div className="w-1/2 flex flex-col gap-10">
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
