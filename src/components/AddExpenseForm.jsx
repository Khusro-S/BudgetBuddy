import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function AddExpenseForm({ budgets, accentColor }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.value = "";
      focusRef.current.value = "";
      focusRef.current.focus();
      // focusRef.current.reset();
    }
  }, [isSubmitting]);

  return (
    <div
      className={`border-2 border-dashed ${
        accentColor ? "border-accent" : "border-primaryGreen"
      } rounded-lg px-5 py-3 shadow-primary flex flex-col grow shrink basis-[48%] max-w-[800px] min-w-[320px] animate-slideInRight`}
    >
      <h2 className="text-2xl">
        Add New{" "}
        <span
          className={`${accentColor ? "text-accent" : "text-primaryGreen"}`}
        >
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="newExpense" className="font-bold">
            Expense
          </label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            required
            placeholder="e.g. Carrots"
            ref={focusRef}
            className={`${accentColor && "focus:border-accent"}`}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="newExpenseAmount" className="font-bold">
            Amount
          </label>
          <input
            type="number"
            inputMode="decimal"
            step="0.01"
            name="newExpenseAmount"
            id="newExpenseAmount"
            placeholder="e.g. $10"
            required
            ref={formRef}
            className={`${accentColor && "focus:border-accent"}`}
          />
        </div>

        <div
          className={`flex flex-col gap-2 w-full ${
            budgets.length === 1 && "hidden"
          }`}
        >
          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select
            name="newExpenseBudget"
            id="newExpenseBudget"
            required
            className={`px-2 py-1 focus:outline-none border-2 border-solid border-lightGrey relative focus:${
              accentColor ? "border-accent" : "border-primaryGreen"
            } appearance-none row-start-1 col-start-1 bg-[url('src/assets/down-arrow.png')] bg-no-repeat bg-[center_right_0.5rem] pr-5 rounded peer`}
          >
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option
                    value={budget.id}
                    key={budget.id}

                    // className="peer-active:bg-primaryGreen peer-active:text-white"
                  >
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />

        <button
          disabled={isSubmitting}
          type="submit"
          className={`${
            accentColor ? "bg-accent" : "bg-primaryGreen"
          } px-2 py-1 rounded text-white hover:ring-offset-2 hover:ring-2 hover:${
            accentColor ? "ring-accent" : "ring-primaryGreen"
          } transition-all ease-linear duration-200 active:scale-90 place-self-start disabled:opacity-70 disabled:hover:ring-0 mb-2`}
        >
          {isSubmitting ? "Adding expense..." : "Add expense"}
        </button>
      </fetcher.Form>
    </div>
  );
}
