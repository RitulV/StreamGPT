import { BASE_IMG_URL } from "../assets/constants";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="bg-radial from-[#282b36] to-[#01030f] text-amber-50 flex flex-col w-[100vw] h-[100vh]">
      <div className="m-1.5 max-h-fit p-0.5 ">
        <img
          className="object-cover ml-4 h-15 w-30"
          src={BASE_IMG_URL + "stream.png"}
        />
      </div>

      <div className="self-center mt-20 w-[400px]">
        <div className="mt-4 flex justify-center">
          <h2 className="text-white text-3xl/9 font-medium tracking-tight">
            Start using Stream
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label className="block text-sm/6 font-medium text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@email.com"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-sky-500 hover:text-sky-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••••••••••"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to={"/signup"}
              className="font-semibold text-sky-500 hover:text-sky-300"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
