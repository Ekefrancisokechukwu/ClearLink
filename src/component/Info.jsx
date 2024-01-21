import check from "../assets/Check icon.png";
import mockup from "../assets/mockup.png";

const Info = () => {
  return (
    <section className="py-16 pl-24 flex justify-between">
      <div className="">
        <h1 className="font-semibold text-[3rem] text-[#1D2939] tracking-[-0.08rem] leading-[4.5rem]">
          Ready to clear the path to perfect communication?
        </h1>

        <ul className="space-y-4 mt-[2rem]">
          <li className="flex text-[#475467] leading-[2rem] items-center gap-x-2">
            <img src={check} alt="check" />
            30 days free trial
          </li>
          <li className="flex text-[#475467] leading-[2rem] items-center gap-x-2">
            <img src={check} alt="check" />
            Cancel at any time
          </li>
          <li className="flex text-[#475467] leading-[2rem] items-center gap-x-2">
            <img src={check} alt="check" />
            Access to all features
          </li>
          <li className="flex text-[#475467] leading-[2rem] items-center gap-x-2">
            <img src={check} alt="check" />
            Peronalized onboarding
          </li>
        </ul>
        <div className="flex items-center gap-x-1 mt-[2.5rem]">
          <a
            href="#"
            className="rounded-[6.25rem] py-[0.875rem]  hover:shadow-xl transition duration-300 px-[1.5rem] bg-white shadow text-[1rem]  font-semibold border"
          >
            Talk to sales
          </a>
          <a
            href="#"
            className="rounded-[6.25rem] py-[0.875rem] px-[1.5rem]  hover:shadow-xl transition duration-300 shadow text-[1rem] text-white bg-[#175CD3] font-semibold "
          >
            Start your free trial
          </a>
        </div>
      </div>
      <div className="">
        <img src={mockup} alt="zoom avatar" />
      </div>
    </section>
  );
};
export default Info;
