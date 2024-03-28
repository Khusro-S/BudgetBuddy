import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Intro from "../components/Intro";

export default function Dashboard() {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}
