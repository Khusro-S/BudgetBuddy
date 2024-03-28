import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchData } from "../helpers";

export default function Rootlayout() {
  const { userName } = useLoaderData();
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl w-full mx-auto p-7 pb-0 ">
        <header>
          <Navbar userName={userName} />
        </header>

        <main>
          <Outlet />
        </main>

        {/* <footer className=" absolute max-md:-bottom-20 bottom-0 max-md:left-0 -left-[9rem] w-screen"> */}
      </div>
      <footer className=" ">
        <Footer />
      </footer>
    </div>
  );
}

export function rootLoader() {
  const userName = fetchData("userName");
  return { userName };
}
