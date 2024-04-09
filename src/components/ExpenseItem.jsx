import { Link, useFetcher } from "react-router-dom";
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";

export default function ExpenseItem({ expense }) {
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  return (
    <>
      <td className="py-4 text-center  shadow-sm rounded-full">
        {expense.name}
      </td>
      <td className="text-center  shadow-sm rounded-full">
        {formatCurrency(expense.amount)}
      </td>
      <td className="text-center  shadow-sm rounded-full">
        {formatDateToLocaleString(expense.createdAt)}
      </td>
      <td className="text-center shadow-sm rounded-full">
        <Link
          style={{ "--color-accent": budget.color }}
          to={`/budget/${budget.id}`}
          className="bg-accent px-2 py-1 shadow-xl text-white hover:ring-offset-2 hover:ring-accent hover:ring-2 rounded-full transition-all duration-200 ease-linear active:scale-90 place-self-center mb-5"
        >
          {budget.name}
        </Link>
      </td>
      <td className="text-center  shadow-sm rounded-full ">
        <fetcher.Form method="post" className="text-center">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-red-400 ring-1 ring-red-400 px-2 py-1 rounded-full shadow-xl bg-red-100 ${
              !isSubmitting &&
              "hover:bg-red-400 hover:text-white hover:ring-offset-2 hover:ring-2 hover:ring-red-400  transition-all ease-linear duration-200 active:scale-90"
            } `}
          >
            {isSubmitting ? "Deleting..." : "Delete"}
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}
