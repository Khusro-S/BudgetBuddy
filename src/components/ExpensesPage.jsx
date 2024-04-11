import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { deleteItem, fetchData } from "../helpers";
import Table from "./Table";
import { toast } from "react-toastify";

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
          <p>Sorry, no expenses to show</p>
        )}
        <button className="px-2 py-1 bg-primaryGreen rounded shadow-xl text-white hover:ring-2 hover:ring-offset-2 hover:ring-primaryGreen place-self-center transition-all duration-200 ease-linear active:scale-90 animate-slideInBottom">
          <Link onClick={() => navigate(-1)}>Go Back</Link>
        </button>
      </div>
    </div>
  );
}

export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your Expense");
    }
  }
}