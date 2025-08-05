import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";
import Main from "./Main";
import Browse from "./Browse"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SuccessfullSignUp from "./SuccessfullSignUp";


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
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signupsuccess",
    element: <SuccessfullSignUp />,
  },
]);

export default Body;
