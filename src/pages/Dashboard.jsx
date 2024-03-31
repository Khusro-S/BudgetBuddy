// Router dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { createBudget, fetchData, waait } from "../helpers";

// components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

// library imports
import { toast } from "react-toastify";

export default function Dashboard() {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="grid place-items-start w-full gap-6">
          <h1 className="text-5xl">
            Welcome back <span className="text-primaryGreen">{userName}</span>
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-xl">
              Personal budgeting is the secret to financial freedom.
            </p>
            <p className="text-xl">Create a budget to get started!</p>
          </div>
          <div className="grid gap-5 w-full">
            {/* {budgets ? () : ()} */}
            <div className="grid gap-6 w-full">
              <div className="flex flex-wrap items-start gap-6">
                <AddBudgetForm />
              </div>
            </div>
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
  return { userName, budgets };
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

  return null;
}
