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
import { expensesLoader } from "./components/ExpensesPage";
// Pages
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";
import Error from "./pages/Error";
import ExpensesPage from "./components/ExpensesPage";

// Actions
import { logoutAction } from "./actions/logoutAction";
import { dashboardAction } from "./pages/Dashboard";

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
      />

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
