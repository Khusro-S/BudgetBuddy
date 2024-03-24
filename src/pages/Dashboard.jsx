import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export default function Dashboard() {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>Hi {userName} </h1>
    </div>
  );
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}
