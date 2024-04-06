import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { fetchData } from "../helpers";
import Table from "./Table";

export default function ExpensesPage() {
  const { expenses } = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid gap-5 w-full">
        <h1 className="text-5xl">All Expenses</h1>
        {expenses && expenses.length > 0 ? (
          <div className="grid gap-5 w-full">
            <h2>
              Recent Expenses{" "}
              <small className="text-base">({expenses.length} total)</small>
            </h2>
            <Table expenses={expenses} />
          </div>
        ) : (
          <p>Sorry &rbrace; no expenses to show</p>
        )}

        <Link
          className="px-2 py-1 bg-primaryGreen rounded text-white hover:ring-2 hover:ring-offset-2 hover:ring-primaryGreen place-self-center transition-all duration-200 ease-linear active:scale-90 animate-slideInBottom"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}
