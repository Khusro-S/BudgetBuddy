import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function AddBudgetForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="border-2 border-dashed border-primaryGreen rounded-lg px-5 py-3 shadow-primary flex flex-col grow shrink basis-[48%] max-w-[800px] min-w-[320px] animate-slideInLeft">
      <h2 className="text-2xl">Create budget</h2>
      <fetcher.Form
        method="post"
        className="flex flex-col gap-4 w-full"
        ref={formRef}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="newBudget" className="font-bold">
            Budget Name
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g. Groceries"
            required
            ref={focusRef}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="newBudgetAmount" className="font-bold">
            Amount
          </label>
          <input
            type="number"
            inputMode="decimal"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g. $350"
            step="0.01"
            required
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-primaryGreen px-2 py-1 rounded text-white hover:ring-offset-2 hover:ring-2 hover:ring-primaryGreen transition-all ease-linear duration-200 active:scale-90 place-self-start disabled:opacity-70 disabled:hover:ring-0 mb-2"
        >
          {isSubmitting ? "Creating Budget..." : "Create Budget"}
        </button>
      </fetcher.Form>
    </div>
  );
}
