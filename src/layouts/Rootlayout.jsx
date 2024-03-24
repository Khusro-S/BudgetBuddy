import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchData } from "../helpers";

export default function Rootlayout() {
  const { userName } = useLoaderData();
  return (
    <div className="max-w-5xl mx-auto py-7">
      <header>
        <Navbar userName={userName} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export function rootLoader() {
  const userName = fetchData("userName");
  return { userName };
}
