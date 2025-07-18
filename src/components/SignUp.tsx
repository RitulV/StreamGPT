import { useState } from "react";
import { BASE_IMG_URL } from "../assets/constants";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
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

      <div className="self-center mt-20">
        <div className="mt-4">
          <h2 className="text-white text-3xl/9 font-medium tracking-tight">
            Create an account to get started
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
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-[1rem_auto] items-center gap-x-2">
                  <input
                    id="agreed"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="agreed" className="text-sm text-white">
                    I agree to the{" "}
                    <Link to={""} className="underline underline-offset-3">
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className={
                  agreed
                    ? "mt-4 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
                    : "mt-4 flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2"
                }
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-sky-500 hover:text-sky-300"
            >
              Log in to your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
