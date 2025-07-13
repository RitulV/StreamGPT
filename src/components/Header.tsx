import { BASE_IMG_URL } from "../assets/constants";

const Header = () => {
  return (
    <div className="m-1.5 max-h-fit flex justify-between p-0.5">
      <img
        className="object-cover ml-4 h-15 w-30 "
        src={BASE_IMG_URL + "stream.png"}
      />
      <button className="border border-[#414556] rounded-3xl object-cover mr-4 h-[35px] w-[70px] flex place-self-center justify-center items-center text-white hover:bg-white hover:text-[#282b36] cursor-pointer">
        Sign In
      </button>
    </div>
  );
};

export default Header;
