import { useFetcher } from "react-router-dom";
import dashboard from "../assets/dashboard.jpg";


export default function Intro() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-5">
      <div className="w-1/2 flex flex-col pt-10 gap-5 max-lg:w-full max-lg:pt-0">
        <h1 className="text-7xl animate-slideInTop">
          Take Control of <span className="text-primaryGreen">Your Money</span>
        </h1>

        <p className="text-xl animate-slideInLeft">
          Personal budgeting is the secret to financial freedom.
          <br />
          Start your journey today.
        </p>
        <fetcher.Form
          method="post"
          className="text-xl flex flex-col items-start"
        >
          <input
            type="text"
            name="userName"
            placeholder="ex: Jhon"
            required
            autoComplete="given-name"
            className="w-3/4 mb-5 animate-slideInLeft"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primaryGreen px-2 py-1 rounded text-white hover:ring-offset-2 hover:ring-2 hover:ring-primaryGreen transition-all ease-linear duration-200 active:scale-90 disabled:opacity-70 disabled:hover:ring-0 animate-slideInBottom"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </fetcher.Form>
      </div>
      <img
        src={dashboard}
        alt="dashboard image"
        className="w-1/2 max-lg:w-3/4 max-lg:mb-2 max-sm:hidden animate-slideInRight"
      />
    </div>
  );
}
