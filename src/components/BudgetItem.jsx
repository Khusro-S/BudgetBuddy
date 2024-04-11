import { Form, Link } from "react-router-dom";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

export default function BudgetItem({ budget, animation, showDelete = false }) {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  return (
    <div
      className={`grid flex-1 grow shrink basis-1/3 max-w-[600px] shadow-primary rounded-2xl border-2 border-solid border-accent px-3 py-2 gap-1 ${animation}`}
      style={{ "--color-accent": color }}
    >
      <div className="flex items-center justify-between gap-7">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>

      <progress
        max={amount}
        value={spent}
        className="appearance-none border-none w-full overflow-hidden rounded-full transition-all duration-500 ease-[cubic-bezier(0.075,0.82,0.165,1)] "
      >
        {formatPercentage(spent / amount)}
      </progress>

      <div className="flex items-center justify-between gap-7">
        <small className="text-accent">{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remainging</small>
      </div>

      {showDelete ? (
        <Form
          className="place-self-center"
          method="post"
          action="delete"
          onSubmit={(e) => {
            if (
              !confirm(
                "Are you sure you want to permanently delete this budget?"
              )
            ) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className={`my-2 px-2 py-1 bg-accent rounded shadow-xl text-white hover:ring-2 hover:ring-offset-2 hover:ring-accent transition-all duration-200 ease-linear active:scale-90 animate-slideInBottom`}
          >
            Delete
          </button>
        </Form>
      ) : (
        <button
          className={`my-2 px-2 py-1 bg-accent rounded shadow-xl text-white hover:ring-2 hover:ring-offset-2 hover:ring-accent transition-all duration-200 place-self-center ease-linear active:scale-90 animate-slideInBottom`}
        >
          <Link to={`/budget/${id}`}>View Details</Link>
        </button>
      )}
    </div>
  );
}
