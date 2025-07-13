import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../assets/constants";

const Header = () => {
  return (
    <div className="m-1.5 max-h-fit flex justify-between p-0.5">
      <img
        className="object-cover ml-4 h-15 w-30 "
        src={BASE_IMG_URL + "stream.png"}
      />
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
    </div>
  );
};

export default Header;
