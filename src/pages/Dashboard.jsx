// Router dom imports
import { Link, useLoaderData } from "react-router-dom";

// helper functions
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  waait,
} from "../helpers";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";

// library imports
import { toast } from "react-toastify";
import Table from "../components/Table";

export default function Dashboard() {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="grid place-items-start w-full gap-8">
          <h1 className="text-5xl animate-fadeInTop">
            Welcome back <span className="text-primaryGreen">{userName}</span>
          </h1>

          <div className="grid gap-5 w-full">
            {budgets && budgets.length > 0 ? (
              <div className="grid gap-8 w-full">
                <div className="flex flex-wrap items-start gap-6">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>

                <h2>Existing Budgets</h2>
                <div className="flex gap-5 flex-wrap">
                  {budgets.map((budget, index) => (
                    <BudgetItem
                      key={budget.id}
                      budget={budget}
                      animation={
                        index % 2 === 0
                          ? "animate-slideInLeft"
                          : "animate-slideInRight"
                      }
                    />
                  ))}
                </div>

                {expenses && expenses.length > 0 && (
                  <div className="grid gap-5 w-full">
                    <h2>Recent Expenses</h2>
                    <Table
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link
                        to="expenses"
                        className="px-2 py-1 bg-primaryGreen shadow-xl text-white hover:ring-offset-2 hover:ring-primaryGreen hover:ring-2 rounded transition-all duration-200 ease-linear active:scale-90 place-self-center mb-5"
                      >
                        View all expenses
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid gap-5 w-full">
                <div className="flex flex-col gap-1 text-xl animate-fadeInRight">
                  <p>Personal budgeting is the secret to financial freedom.</p>
                  <p>Create a budget to get started!</p>
                </div>
                <div className="flex flex-wrap items-start gap-6">
                  <AddBudgetForm />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

export async function dashboardAction({ request }) {
  await waait();
  const data = await request.formData();
  // console.log({ data, request });
  const { _action, ...values } = Object.fromEntries(data);

  // new users submission
  if (_action === "newUser") {
    try {
      // throw new Error("new error");
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }

  // create new budget
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("There was a problem creating your budget.");
    }
  }

  // create expense
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

  // delete expense
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

  return null;
}
