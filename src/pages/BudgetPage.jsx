import { useLoaderData } from "react-router-dom";

//helpers
import { createExpense, deleteItem, getAllMatchingItems } from "../helpers";

//components
import BudgetItem from "../components/BudgetItem";
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

//library
import { toast } from "react-toastify";

export default function BudgetPage() {
  const { budget, expenses } = useLoaderData();
  return (
    <div
      className="grid w-full gap-6"
      style={{ "--color-accent": budget.color }}
    >
      <h1>
        <span className="text-accent">{budget.name}</span> Overview
      </h1>

      <div className="flex gap-5 flex-wrap items-start">
        <BudgetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} accentColor={true} />
      </div>

      {expenses && expenses.length > 0 && (
        <div className="grid w-full gap-4">
          <h2>
            <span className="text-accent">{budget.name} Expenses</span>
          </h2>
          <Table expenses={expenses} accentColor={true} showBudget={false} />
        </div>
      )}
    </div>
  );
}

export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist");
  }

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  return { budget, expenses };
}

export async function budgetAction({ request }) {
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

  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created`);
    } catch (e) {
      throw new Error("There was a problem creating your Expense");
    }
  }
}
