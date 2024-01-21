import logo from "../assets/zlogo.png";

const Header = () => {
  return (
    <header className="fixed z-50  left-1/2 top-0 mt-[1.5rem] rounded-[6.25rem] flex justify-between items-center backdrop-blur -translate-x-1/2 bg-[#f2f4f7d8] w-[80rem] px-[2rem] py-[1rem]">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <nav className="">
        <ul className="flex items-center gap-x-[2.5rem] ">
          <li>
            <a
              href="#"
              className="py flex items-center gap-x-3 1.125rem text-[#667085] font-semibold leading-[1.75rem]"
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py flex items-center gap-x-3 1.125rem text-[#667085] font-semibold leading-[1.75rem]"
            >
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py flex items-center gap-x-3  1.125rem text-[#667085] font-semibold leading-[1.75rem]"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py  1.125rem text-[#667085] font-semibold leading-[1.75rem]"
            >
              Pricing
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-x-2">
        <a
          href=""
          className="text-[1rem] hover:shadow-xl transition duration-300 shadow py-[0.875rem] px-[1.5rem] inline-block font-semibold leading-[1.5rem] bg-white rounded-[6.25rem]"
        >
          Talk to sales
        </a>

        <a
          href=""
          className="text-[1rem] shadow  hover:shadow-xl transition duration-300 text-white py-[0.875rem] font-semibold leading-[1.5rem] bg-[#175CD3] rounded-[6.25rem] px-[1.5rem]"
        >
          Sign up for free
        </a>
      </div>
    </header>
  );
};
export default Header;
