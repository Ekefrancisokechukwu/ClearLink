import { useEffect, useRef } from "react";

const SingleQuestion = ({ data, onclick, index, activePanel }) => {
  const active = activePanel === index;

  const accordp = useRef(null);
  const accord = useRef(null);

  useEffect(() => {
    const infoHeight = accordp.current.clientHeight;
    if (active) {
      accord.current.style.height = `${infoHeight}px`;
    } else {
      accord.current.style.height = 0;
    }
  }, [active]);

  return (
    <article
      className={`p-[2rem] rounded-[1rem]   ${
        active ? "bg-[#F9FAFB] border" : "border-t border-b"
      } `}
    >
      <button
        onClick={onclick}
        className="flex items-center gap-x-5 justify-between w-full"
      >
        <h1 className="text-[#101828] text-[1.25rem] font-semibold leading-[1.875rem]">
          {data.question}
        </h1>

        <span>
          {active ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#98A2B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="plus-circle">
                <path
                  id="Icon"
                  d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          )}
        </span>
      </button>

      <div
        ref={accord}
        className={`mt-2 transition-all duration-200 ${
          active ? " overflow-visible visible" : "h-0 overflow-hidden invisible"
        }`}
      >
        <p ref={accordp} className="text-[1.125rem] text-[#475467]">
          {data.answer}
        </p>
      </div>
    </article>
  );
};
export default SingleQuestion;
