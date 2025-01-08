import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import instagram_logo from "../assets/instagram_logo.png";
import { loginContext } from "../context/loginContext";

const Navbar = ({ login }) => {
  const navigate = useNavigate();
  const { setopenModal } = useContext(loginContext);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    const loginStatus = () => {
      const token = localStorage.getItem("jwt");
      if (token || login) {
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
    };
    loginStatus();
  }, []);
  const Signout = () => {
    setopenModal(true);
  };

  return (
    <div className="">
      <div className="hidden pt-7 fixed pl-11 gap-16 lg:block ">
        <img
          className="h-[40px] cursor-pointer"
          src={instagram_logo}
          alt="instagram_logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="w-[50%]">
          <ul className="">
            {isLoggedIn ? (
              <>
                <Link to={"/"} className="flex items-center">
                  <span class="material-symbols-outlined">home</span>
                  <li className=" text-l font-bold cursor-pointer p-5 hidden lg:block">
                    Home
                  </li>
                </Link>
                <Link to={"/myfollowing"} className="flex items-center">
                  <span class="material-symbols-outlined">heart_check</span>
                  <li className="text-l font-bold cursor-pointer p-5 hidden lg:block">
                    My Following
                  </li>
                </Link>
                <Link to={"/search"} className="flex items-center">
                  <span class="material-symbols-outlined">search</span>
                  <li className="text-l font-bold cursor-pointer p-5 hidden lg:block">
                    Search
                  </li>
                </Link>
                <Link to={"/profile"} className="flex items-center">
                  <span class="material-symbols-outlined">account_circle</span>
                  <li className="text-l font-bold cursor-pointer p-5 hidden lg:block">
                    Profile
                  </li>
                </Link>

                <Link to={"/createpost"} className="flex items-center">
                  <span class="material-symbols-outlined">add_circle</span>
                  <li className="text-l font-bold cursor-pointer p-5 hidden lg:block">
                    Create Post
                  </li>
                </Link>
                <Link to={"/"} className="flex items-center">
                  <span class="material-symbols-outlined">logout</span>
                  <li
                    className="text-l font-bold cursor-pointer p-5 hidden lg:block"
                    onClick={() => Signout()}
                  >
                    Sign Out
                  </li>
                </Link>
              </>
            ) : (
              <div className="flex"></div>
            )}
          </ul>
        </div>
      </div>
      <div className="block fixed bottom-0 left-0 w-full bg-white lg:hidden">
        <div className="pt-2 pl-11 flex justify-center lg:flex-row lg:items-center lg:h-auto">
          <div className="w-[100%]">
            <ul className="flex lg:flex justify-evenly items-center lg:space-x-5 pr-6">
              {isLoggedIn ? (
                <>
                  <Link to={"/"} className="flex items-center">
                    <span class="material-symbols-outlined">home</span>
                  </Link>
                  <Link to={"/myfollowing"} className="flex items-center">
                    <span class="material-symbols-outlined">heart_check</span>
                  </Link>
                  <Link to={"/search"} className="flex items-center">
                    <span class="material-symbols-outlined">search</span>
                  </Link>
                  <Link to={"/profile"} className="flex items-center">
                    <span class="material-symbols-outlined">
                      account_circle
                    </span>
                  </Link>

                  <Link to={"/createpost"} className="flex items-center">
                    <span class="material-symbols-outlined">add_circle</span>
                  </Link>
                  <Link to={"/"} className="flex items-center">
                    <span class="material-symbols-outlined">logout</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/signup"} className="flex items-center">
                    <span class="material-symbols-outlined">input</span>
                  </Link>
                  <Link to={"/signin"} className="flex items-center">
                    <span class="material-symbols-outlined">login</span>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
