import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";

// import Profile from "../../../images/profile.png";
import Logo from "../assets/images/logo1.png";
// import { setUser, clearUser } from "../../../redux/actions/userAction";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import request from "../../../async/request";

const Header = ({ headless, bgpur, textwhite }) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [menuBar, setMenuBar] = useState(false);
  // const dispatch = useDispatch();
  // const username = useSelector((state) => state.user.username);
  // const userToken = useSelector((state) => state.user.Token);
  // const userToken = "uududu"
  // const username = "abdulahi"
  const userToken = null
  const username = null
  const navigate = useNavigate()

  const handleMenu = () => {
    setMenuBar((prevMenuBar) => !prevMenuBar);
  };
  const cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;

  return (
    <header
      className={`shadow z-30 fixed left-0 w-full top-0 py-3 md:py-0 md:h-[5rem] md:pt-3.5 bg-white trans p-3 overflow-hidden
	    ${menuBar ? "h-[30rem] md:h-[6rem]" : "h-[4.5rem]"}`}
    >
      <div className=" md:flex md:justify-between container items-center">
        <div className="flex col-span-1 items-center justify-between">
          <Link
            to="/"
            className={`text-3xl ${textwhite} font-roboto font-bold logo`}
          >
            <img
              src={Logo}
              alt="logo"
              className={`-mt-6  `}
            />
          </Link>
          <div className="flex gap-3 ">
          <div onClick={()=>navigate('/cart')} className="border cursor-pointer border-secondary text-secondary md:px-3 md:py-3 px-3 py-1 flex items-center rounded-lg md:hidden">
                  {/* <div className="flex"> */}
                  <button><FaCartPlus/> </button>
                  <div className="text-white rounded-full px-1 bg-secondary absolute -mt-7 ml-3">
                    <span className="text-xs">{cartCount}</span>
                  </div>
                  {/* </div> */}
                </div>
          <button className="md:hidden" onClick={handleMenu}>
            <FaBars size={20} />
          </button>
          </div>
        </div>
        <nav
          className={`grid md:grid-cols-2 col-span-2 lg:gap-20 pl-3 md:pl-0 trans slide
			`}
        >
          <ul className="flex flex-col text-[1rem] md:items-center md:flex-row gap-y-3 md:gap-5 md:justify-evenly lg:justify-between mt-5 md:mt-0">
            {/* <li className={splitLocation[1] === "home" ? "active-nav" : ""}>
              <Link to="/" className="text-[1.2rem] font-400">
                Home
              </Link>
            </li> */}
            {/* <li className={splitLocation[1] === "buy" ? "active-nav" : ""}>
              <Link to="/buy" className="text-[1.2rem] font-400">
                Buy
              </Link>
            </li> */}
            <li className={splitLocation[1] === "rent" ? "active-nav" : "text-secondary "}>
              <Link to="/rent" className="text-[1.2rem] font-400">
                Rent
              </Link>
            </li>
            
            <li className={splitLocation[1] === "about" ? "active-nav" : "text-secondary"}>
              <Link to="/about" className="text-[1.2rem] font-400">
                About Us
              </Link>
            </li>
            <li className={splitLocation[1] === "faq" ? "active-nav" : "text-secondary"}>
              <Link to="/faq" className="text-[1.2rem] font-400">
                fAQs
              </Link>
            </li>
            <li
              className={splitLocation[1] === "contact-us" ? "active-nav" : "text-secondary"}
            >
              <Link to="#" className="text-[1.2rem] font-400">
                Contact Us
              </Link>
            </li>

            {/* {userToken ? (
              ""
            ) : (
              <li className={splitLocation[1] === "login" ? "active-nav" : ""}>
                <Link to="/login">Login</Link>
              </li>
            )}

           
            */}
          </ul>
          <ul className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0 gap-y-3 gap-x-4 lg:justify-end">
            {userToken ? (
              <>
                <li className={`xl:mr-4`}>
                  <Link to="/"> {username}</Link>
                </li>
                <li className="text-3xl hidden md:block text-gray-400">|</li>
                <li
                  className="border border-gray-300 pl-3 pr-1 py-1 flex md:gap-x-1 xl:gap-x-3 justify-between items-center rounded-lg cursor-pointer"
                  // onClick={logout}
                >
                  Log Out
                </li>
              </>
            ) : (
              <>
              <li onClick={()=>navigate('/cart')} className="hidden md:cursor-pointer md:flex  border border-secondary text-secondary md:px-3 md:py-3 pl-[2rem] pr-[2rem] py-1 items-center rounded-lg">
                  {/* <div className="flex"> */}
                  <button to="/login"><FaCartPlus/> </button>
                  <div className="text-white rounded-full px-1 bg-secondary absolute -mt-7 ml-3">
                    <span className="text-xs">{cartCount}</span>
                  </div>


                  {/* </div> */}
                </li>
                <li className="border border-secondary text-secondary md:pl-[3.5rem] md:pr-[3.5rem] md:py-3 pl-[2rem] pr-[2rem] py-1 flex items-center rounded-lg">
                  <Link to="#">Login </Link>
                </li>
                <li className="bg-secondary text-white md:pl-[3.5rem] md:pr-[3.5rem] md:py-3 pl-[2rem] pr-[2rem] py-1 flex items-center rounded-lg">
                  <Link to="#">Register </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
