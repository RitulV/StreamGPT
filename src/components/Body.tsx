import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";
import Main from "./Main";
import SignIn from "./SignIn";

const Body = () => {
  return (
    <div className="bg-radial from-[#282b36] to-[#01030f] text-amber-50 flex flex-col w-[100%] h-[100%]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
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
