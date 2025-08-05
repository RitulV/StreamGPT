import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BASE_IMG_URL } from "../assets/constants";

const SuccessfullSignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("isSignUpSuccessfull")) {
      navigate("/browse");
    }
  }, []);

  const handleLinkClick = () => {
    sessionStorage.removeItem("isSignUpSuccessfull");
  };

  return (
    <div className="bg-radial from-[#282b36] to-[#01030f] text-amber-50 flex flex-col w-[100vw] h-[100vh]">
      <div className="m-1.5 max-h-fit p-0.5 ">
        <Link to="/">
          <img
            className="object-cover ml-4 h-15 w-30 "
            src={BASE_IMG_URL + "stream.png"}
          />
        </Link>
      </div>

      <div className="flex flex-col w-[100%] h-[100%] justify-center items-center">
        <div className="self-center flex flex-col items-center mb-[70px]">
          <div className="m-4">
            <h2 className="text-white text-3xl/9 font-medium tracking-tight">
              Account creation successful!
            </h2>
          </div>

          <div className="m-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-center text-sm/6 text-gray-500">
              To continue,{" "}
              <Link
                to={"/login"}
                className="font-semibold text-sky-500 hover:text-sky-300"
                onClick={handleLinkClick}
              >
                Log in{" "}
              </Link>
              to your account
            </p>
          </div>
          <div className="m-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="text-center text-sm/6 text-gray-500">
              Go to{" "}
              <Link
                to={"/"}
                className="font-semibold text-sky-500 hover:text-sky-300"
                onClick={handleLinkClick}
              >
                Dashboard
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullSignUp;
