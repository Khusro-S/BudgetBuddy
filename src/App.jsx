import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import Rootlayout, { rootLoader } from "./layouts/Rootlayout";

// Loaders
import { dashboardLoader } from "./pages/Dashboard";
import { expensesAction, expensesLoader } from "./components/ExpensesPage";
import { budgetLoader } from "./pages/BudgetPage";

// Pages
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";
import Error from "./pages/Error";
import ExpensesPage from "./components/ExpensesPage";
import BudgetPage from "./pages/BudgetPage";

// Actions
import { logoutAction } from "./actions/logoutAction";
import { dashboardAction } from "./pages/Dashboard";
import { budgetAction } from "./pages/BudgetPage";
import { deleteBudget } from "./actions/deleteBudget";

// Library (?)
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}
      loader={rootLoader}
      errorElement={<Error />}
    >
      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
        action={dashboardAction}
        errorElement={<Error />}
      />

      <Route
        path="expenses"
        element={<ExpensesPage />}
        loader={expensesLoader}
        action={expensesAction}
        errorElement={<Error />}
      />

      <Route
        path="budget/:id"
        element={<BudgetPage />}
        loader={budgetLoader}
        errorElement={<Error />}
        action={budgetAction}
      >
        <Route path="delete" action={deleteBudget} />
      </Route>

      <Route path="logout" action={logoutAction} />

      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer pauseOnFocusLoss={false} draggable={true} />
    </>
  );
}

export default App;
