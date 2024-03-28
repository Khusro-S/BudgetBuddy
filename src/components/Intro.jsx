import { Form } from "react-router-dom";
import dashboard from "../assets/dashboard.jpg";

export default function Intro() {
  return (
    <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-5">
      <div className="w-1/2 flex flex-col pt-10 gap-5 max-lg:w-full">
        <h1 className="text-7xl">
          Take Control of <span className="text-primaryGreen">Your Money</span>
        </h1>
        <p className="text-xl">
          Personal budgeting is the secret to financial freedom.
          <br />
          Start your journey today.
        </p>
        <Form method="post" className="text-xl flex flex-col items-start">
          <input
            type="text"
            name="userName"
            placeholder="ex: Jhon"
            required
            autoComplete="given-name"
            className="border-2 border-lightGrey px-2 py-1 rounded focus:outline-none focus:border-primaryGreen w-3/4 mb-5"
          />
          <button
            type="submit"
            className="bg-primaryGreen px-2 py-1 rounded text-white hover:ring-offset-2 hover:ring-2 hover:ring-primaryGreen transition-all ease-linear duration-200"
          >
            Create account
          </button>
        </Form>
      </div>
      <img
        src={dashboard}
        alt="dashboard image"
        className="w-1/2 max-lg:w-3/4 max-lg:mb-56 max-sm:hidden"
      />
    </div>
  );
}
