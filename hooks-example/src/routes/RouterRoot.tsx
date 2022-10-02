import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Memo from "~/pages/example/memo/Memo";

import BoxesMemo from "~/pages/example/memo/BoxesMemo";
import Callback from "~/pages/example/callback/Callback";
import Reducer from "~/pages/example/reducer/Reducer";
import Context from "~/pages/context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/memo" replace={true} />,
  },
  {
    path: "memo",
    element: <Memo />,
  },
  {
    path: "boxes-memo",
    element: <BoxesMemo />,
  },

  { path: "callback", element: <Callback /> },
  { path: "reducer", element: <Reducer /> },
  { path: "context", element: <Context /> },
]);

const RouterRoot = () => {
  return <RouterProvider router={router} />;
};

export default RouterRoot;
