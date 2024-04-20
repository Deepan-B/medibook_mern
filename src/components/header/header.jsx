import { useEffect, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Doctors",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className="bg-center bg-cover h-[80px] leading-[80px] my-auto p-2"
      ref={headerRef}
    >
      <div>
        <div className="navbar flex justify-center items-center w-full my-auto">
          <div className="flex justify-start items-start w-full">
            <div className="font-extrabold text-blue-600  text-2xl md:text-3xl lg:text-4xl ml-4 md:ml-12 p-2">
              MEDIBOOK
            </div>
          </div>
          <div className="navigation w-full" ref={menuRef} onClick={toggleMenu}>
            <span className="md:hidden relative left-[90%] sm:left-[95%] top-[20px] z-[300]">
              <IoIosCloseCircleOutline className="w-6 h-6 cursor-pointer"></IoIosCloseCircleOutline>
            </span>
            <ul className="menu flex justify-center md:justify-start items-center text-base lg:text-lg gap-6 lg:gap-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-lg lg:text-xl leading-7 font-bold"
                        : "text-textColor leading-5 font-medium"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="gap-4 flex items-center mx-2">
            {token && user ? (
              <div className="flex flex-col">
                <Link
                  className="flex flex-col"
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  {user.photo ? (
                    <figure className="w-[35px] h-[35px] rounded-full">
                      <img
                        src={user.photo}
                        alt="user"
                        className="w-full rounded-full cursor-pointer"
                      />
                    </figure>
                  ) : (
                    <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-gray-300 text-gray-600 font-semibold cursor-pointer">
                      {user.name.charAt(0)}
                    </div>
                  )}
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor rounded-full px-4 py-1 md:px-6 md:py-2 text-white font-semibold h-[30px] md:h-[40px] lg:h-[44px] flex items-center">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
