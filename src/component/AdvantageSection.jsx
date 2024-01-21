import Heading from "./ui/heading";
import zap1 from "../assets/zap.png";
import zap2 from "../assets/zap (1).png";
import zap3 from "../assets/zap (2).png";
import zap4 from "../assets/zap (3).png";
import people from "../assets/Rectangle 1.png";
import arrow from "../assets/arrow.png";

const AdvantageSection = () => {
  return (
    <section className="px-24 py-20">
      <div className="">
        <h6 className="font-semibold text-[#175CD3] text-[1.125rem]">
          The ClearLink Advantage
        </h6>
        <Heading>Why choose ClearLink?</Heading>
        <p className="font-[1.5rem] mt-[1.5rem] xl:w-[662px]  leading-[2rem] text-[#667085]">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>

      <div className="mt-20 flex gap-x-12 items-center justify-between">
        <div className="grid grid-cols-2 gap-x-[2.5rem] w-[50rem] gap-y-[3.75rem]">
          <article>
            <div>
              <img src={zap1} alt="icon" />
            </div>
            <h2 className="text-[#101828] mt-[1.25rem] text-[1.5rem] font-semibold leading-[2rem]">
              Crystal-clear HD video
            </h2>
            <p className="text-[#475467]  leading-[1.75rem] text-[1.125rem]">
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </article>
          <article>
            <div>
              <img src={zap2} alt="icon" />
            </div>
            <h2 className="text-[#101828] mt-[1.25rem] text-[1.5rem] font-semibold leading-[2rem]">
              Noise-canceling audio
            </h2>
            <p className="text-[#475467]  leading-[1.75rem] text-[1.125rem]">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </article>
          <article>
            <div>
              <img src={zap3} alt="icon" />
            </div>
            <h2 className="text-[#101828] mt-[1.25rem] text-[1.5rem] font-semibold leading-[2rem]">
              Scheduling made easy{" "}
            </h2>
            <p className="text-[#475467]  leading-[1.75rem] text-[1.125rem]">
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </article>
          <article>
            <div>
              <img src={zap4} alt="icon" />
            </div>
            <h2 className="text-[#101828] mt-[1.25rem] text-[1.5rem] font-semibold leading-[2rem]">
              Bank-grade security
            </h2>
            <p className="text-[#475467]  leading-[1.75rem] text-[1.125rem]">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </article>
        </div>

        <div className="w-[30rem] relative ">
          <img src={arrow} alt="arrow" className="absolute -top-[15rem]" />
          <img src={people} alt="people" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
export default AdvantageSection;
