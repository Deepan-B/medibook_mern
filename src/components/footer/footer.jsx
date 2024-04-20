import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const SocialLinks = [
  {
    path: "https://github.com/Deepan-B",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/deepan_b_4/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/deepan-b-449234251/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const pages = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const pages2 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appoinment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const pages3 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-[30px]">
          <div className="mx-auto">
            <p className="font-bold text-2xl text-primaryColor hidden md:block ">
              MEDIBOOK
            </p>
            <p className="text-center md:text-left text-[16px] leading-7 font-[400] text-textColor md:mt-4">
              Copyright &copy; {year} developed by Deepan all rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4 justify-around md:justify-start">
              {SocialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:w-2/3 md:gap-3">
            <div className="text-center md:text-left">
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Quick Links
              </h2>
              <ul>
                {pages.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                I Want to
              </h2>
              <ul>
                {pages3.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Support
              </h2>
              <ul>
                {pages2.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      to={item.path}
                      className="text-[16px] leading-7 font-[400] text-textColor"
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
