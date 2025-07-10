import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error"
import Main from "./Main";
import SignIn from "./SignIn";


const Body = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
    ],
  },
]);

export default Body;