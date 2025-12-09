import { Link } from "react-router-dom";
import { BASE_IMG_URL, LOCAL_AUTH_TOKEN } from "../assets/constants";
import { useEffect, useRef, useState } from "react";
import { useClickOutsideMultiple } from "../utils/useClickOutsideMultiple";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../utils/supabase";

const Header = () => {
  const storedData = localStorage.getItem(LOCAL_AUTH_TOKEN);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const imgRef = useRef<HTMLImageElement>(null);
  const menuRef = useRef<HTMLLIElement>(null);
  const browsePaths: Array<string> = ["/login", "/signupsuccess", "/"];

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/");
      }

      if (!session && location.pathname == "/browse") {
        navigate("/login");
      }

      if (session && browsePaths.includes(location.pathname)) {
        navigate("/browse");
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useClickOutsideMultiple([imgRef, menuRef], () => setProfileOpen(false));

  const handleLogOut = async () => {
    let { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    } else {
      setProfileOpen(false);
    }
  };

  return (
    <div className="m-1.5 max-h-fit flex justify-between p-0.5">
      <img
        className="object-cover ml-4 h-15 w-30 "
        src={BASE_IMG_URL + "stream.png"}
      />
      {!storedData?.includes("authenticated") ? (
        <div className="flex justify-between items-center gap-3">
          <Link to="/login" className="hover:underline underline-offset-6">
            Log in
          </Link>
          <button className="group border border-[#414556] rounded-3xl object-cover mr-4 p-1 h-fit w-[95px] flex place-self-center justify-center items-center text-black bg-white cursor-pointer">
            <Link to="/signup">Sign Up </Link>
            <div className="rounded-3xl m-1 group-hover:bg-[#282b36]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-[18px] w-[18px] fill-black group-hover:fill-white"
              >
                <g data-name="17-Arrow Up">
                  <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                  <path d="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="relative">
            <img
              className="h-[50px] w-[50px] mr-4 p-0.5 border-none rounded-full object-cover hover:cursor-pointer"
              src={BASE_IMG_URL + "avatar.png"}
              onClick={() => setProfileOpen(!profileOpen)}
              ref={imgRef}
            />
            {profileOpen && (
              <div className="absolute bg-white shadow-lg rounded-2xl -left-12 top-4.5rem w-25 border border-gray-500 z-1">
                <ul>
                  <li
                    className="cursor-pointer text-lg text-black p-2 hover:font-semibold"
                    ref={menuRef}
                    onClick={() => setProfileOpen(false)}
                  >
                    Profile
                  </li>
                  <li
                    className="cursor-pointer text-lg text-black p-2 hover:font-semibold"
                    ref={menuRef}
                    onClick={() => setProfileOpen(false)}
                  >
                    Setting
                  </li>
                  <li
                    className="cursor-pointer text-lg text-black p-2 hover:font-semibold"
                    ref={menuRef}
                    onClick={() => handleLogOut()}
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
