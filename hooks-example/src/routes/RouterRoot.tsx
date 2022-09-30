import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ReactNode } from "react";

import Memo from "~/pages/example/memo/Memo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/memo" replace={true} />,
  },
  {
    path: "memo",
    element: <Memo />,
  },
]);

const RouterRoot = () => {
  return <RouterProvider router={router} />;
};

export default RouterRoot;
