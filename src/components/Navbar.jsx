import { Form, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ userName }) {
  return (
    <nav className="flex justify-between w-full items-center mb-10 max-md:mb-7 rounded">
      <NavLink
        to="/"
        className=" flex items-center rounded hover:ring-2 hover:ring-offset-2 hover:ring-primaryGreen pl-1 pr-2 py-1 active:scale-90"
      >
        <img src={logo} alt="Budget Buddy Logo" className="mr-3 w-9" />
        <h3 className="max-sm:hidden">
          <span className="text-primaryGreen">Budget</span>Buddy
        </h3>
      </NavLink>

      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(e) => {
            if (!confirm("Delete user and all data?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-400 border-2 border-red-400 px-2 py-1 rounded bg-red-100 hover:bg-red-400 hover:text-white hover:ring-offset-2 hover:ring-2 hover:ring-red-400  transition-all ease-linear duration-200 active:scale-90"
          >
            Delete User
          </button>
        </Form>
      )}
    </nav>
  );
}
