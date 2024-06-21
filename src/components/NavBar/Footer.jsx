import React from "react";
import { Link } from "react-router-dom";
import { footerNavs } from "../../constants";
import Logo from "../../assets/tesract-main.png";
import { Twitter, Facebook, LinkedinIcon } from "lucide-react";
import ScrollToTopButton from "./utils/ScrollToTopButton";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-100 px-4 py-5 max-w-screen-xl mx-auto md:px-8 mt-24">
        <div className="max-w-3xl sm:mx-auto sm:text-center">
          <div className="flex justify-center">
            <img src={Logo} className="w-36 h-auto" />
          </div>
          <p className="leading-relaxed  text-base font-light">
            EventAura empowers student-driven communities and college clubs in
            tech, AI, ML, and development. Our platform offers seamless payment
            gateways and efficient event management, ensuring smooth
            transactions and organized events for participants and event
            managers.
          </p>
        </div>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="hover:text-indigo-600">
              <Link to={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0 font-semibold">
            &copy; 2024 EventAura
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <Twitter className="w-6 h-6 text-blue-400" />
                </a>
              </li>

              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <Facebook className="w-6 h-6 text-blue-700" />
                </a>
              </li>
              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <LinkedinIcon className="w-6 h-6 text-blue-700" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
};

export default Footer;
