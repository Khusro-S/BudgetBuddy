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

// Pages
import Dashboard from "./pages/Dashboard";
import Notfound from "./pages/Notfound";
import Main from "./pages/Main";

// Actions
import { logoutAction } from "./actions/logoutAction";

// Library (?)
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />} loader={rootLoader}>
      <Route index element={<Main />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={dashboardLoader}
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
