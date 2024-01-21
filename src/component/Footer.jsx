import logo from "../assets/logomini.png";

import appleStore from "../assets/applestore.png";
import playstore from "../assets/playstore.png";

import linkdin from "../assets/linkdin.png";
import x from "../assets/x.png";
import facebook from "../assets/facebook.png";
import git from "../assets/git.png";
import youtbue from "../assets/youtbue.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <footer>
      <div className="px-24  py-10 flex items-start justify-between">
        <div className="w-[25rem]">
          <figure>
            <img src={logo} alt="logo" />
          </figure>

          <p className="mt-[2rem] text-[1.125rem] leading-[1.75rem]">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        <ul className="space-y-[1rem]">
          <li>
            <a
              href="#"
              className="text-[1rem]  font-semibold leading-[1.5rem] text-[#667085]"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Tutorials
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Pricing
            </a>
          </li>
        </ul>

        <ul className="space-y-[1rem]">
          <li>
            <a
              href="#"
              className="text-[1rem]  font-semibold leading-[1.5rem] text-[#667085]"
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Press
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="space-y-[1rem]">
          <li>
            <a
              href="#"
              className="text-[1rem]  font-semibold leading-[1.5rem] text-[#667085]"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Help centre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Tutorials
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Support
            </a>
          </li>
        </ul>
        <ul className="space-y-[1rem]">
          <li>
            <a
              href="#"
              className="text-[1rem]  font-semibold leading-[1.5rem] text-[#667085]"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Privacy
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Cookies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Licenses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[1.125rem]  font-semibold leading-[1.5rem] text-[#475467]"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-y-[1rem]">
          <h6 className="text-[#004EEB] text-[1rem] font-semibold leading-[1.5rem]">
            Get the app
          </h6>
          <a href="#" className="inline-block">
            <img src={appleStore} alt="appleStore" />
          </a>
          <a href="#" className="inline-block">
            <img src={playstore} alt="playstore" />
          </a>
        </div>
      </div>

      <div className="bg-[#F9FAFB] flex justify-between items-center px-24 py-11">
        <p className="text-[#667085] leading-[1.5rem]">
          © 2023 ClearLink. All rights reserved.
        </p>

        <div className="flex items-center  gap-x-[1.5rem]">
          <a href="#">
            <img src={linkdin} alt="socail" />
          </a>
          <a href="#">
            <img src={x} alt="socail" />
          </a>
          <a href="#">
            <img src={facebook} alt="socail" />
          </a>
          <a href="#">
            <img src={insta} alt="socail" />
          </a>
          <a href="#">
            <img src={git} alt="socail" />
          </a>
          <a href="#">
            <img src={youtbue} alt="socail" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
