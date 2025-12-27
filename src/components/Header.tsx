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
          <Link
            to="/login"
            className="font-[Space_Grotesk] font-[400px] text-md/loose text-shadow-lg/30 bg-slate-800 rounded-xl p-[1.5px] hover:inset-shadow-sm hover:inset-shadow-gray-700 hover:text-shadow-none opacity-70 hover:opacity-100"
          >
            <span className="p-[4px] rounded-xl m-4">Log in</span>
          </Link>
          <Link
            to="/signup"
            className="font-[Space_Grotesk] font-[400px] text-md/loose text-shadow-lg/30 bg-slate-800 rounded-xl p-[1.5px] hover:inset-shadow-sm hover:inset-shadow-gray-700 hover:text-shadow-none opacity-70 hover:opacity-100"
          >
            <span className="p-[4px] rounded-xl m-4">Sign Up</span>
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center gap-3">
          {location.pathname == "/browse" ? (
            <Link
              to="/ai/search"
              className="flex items-center mx-[5px] py-[1.5px] px-[4px] font-[Space_Grotesk] font-[400px] bg-slate-800 rounded-xl text-md/loose text-shadow-lg/30 hover:text-shadow-none opacity-70 hover:opacity-100"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="3"
                stroke="white"
                fill="neutral"
              >
                <circle cx="34.52" cy="11.43" r="5.82" />
                <circle cx="53.63" cy="31.6" r="5.82" />
                <circle cx="34.52" cy="50.57" r="5.82" />
                <circle cx="15.16" cy="42.03" r="5.82" />
                <circle cx="15.16" cy="19.27" r="5.82" />
                <circle cx="34.51" cy="29.27" r="4.7" />
                <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
                <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
                <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
                <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
                <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
                <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
                <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
                <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
                <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
              </svg>
              <span className="p-[4px] rounded-xl">AI Search</span>
            </Link>
          ) : (
            <Link
              to="/browse"
              className="mx-[5px] p-[5px] font-[Space_Grotesk] font-[400px] text-md/loose text-shadow-lg/30 bg-slate-800 rounded-xl hover:inset-shadow-sm hover:inset-shadow-gray-700 hover:text-shadow-none opacity-70 hover:opacity-100"
            >
              <span className="p-[4px] rounded-xl m-4">Browse</span>
            </Link>
          )}

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
