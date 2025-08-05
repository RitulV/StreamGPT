import { useState, useEffect, useRef } from "react";
import { supabase } from "../utils/supabase";
import { BASE_IMG_URL } from "../assets/constants";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [_error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/browse");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  async function handleSignIn() {
    if (!emailRef.current || !passwordRef.current) return;

    let { error } = await supabase.auth.signInWithPassword({
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/browse");
    }
  }

  return (
    <div className="bg-radial from-[#282b36] to-[#01030f] text-amber-50 flex flex-col w-[100%] min-h-screen">
      <div className="m-1.5 max-h-fit p-0.5 ">
        <Link to="/">
          <img
            className="object-cover ml-4 h-15 w-30 "
            src={BASE_IMG_URL + "stream.png"}
          />
        </Link>
      </div>

      <div className="flex flex-col w-[100%] h-[100%] justify-center items-center mb-[70px]">
        <div className="self-center mt-20 w-[400px]">
          <div className="mt-4 flex justify-center">
            <h2 className="text-white text-3xl/9 font-medium tracking-tight">
              Start using Stream
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              onSubmit={(e) => e.preventDefault()}
              method="POST"
            >
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
                    ref={emailRef}
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
                    ref={passwordRef}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div className="grid grid-cols-[1rem_auto] items-center gap-x-2">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className="h-4 w-4"
                    />
                    <label htmlFor="remember-me" className="text-sm text-white">
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <Link
                      to={""}
                      className="text-sm text-cyan-600 hover:text-cyan-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-sky-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={handleSignIn}
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

        <div className="mt-5 flex justify-center">
          <span className="text-red-500">{_error}</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
