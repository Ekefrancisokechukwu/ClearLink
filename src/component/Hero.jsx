import bot from "../assets/bot.png";
import avater1 from "../assets/Avatar.png";
import avater2 from "../assets/Avatar1.png";
import avater3 from "../assets/Avatar2.png";
import avater4 from "../assets/Avatar3.png";
import avater5 from "../assets/avatar4.png";
import star from "../assets/star.png";
import frame from "../assets/Frame.png";
import Heading from "./ui/heading";

const Hero = () => {
  return (
    <section className="bg-[url('./assets/bgpattern.png')] bg-cover mx-auto flex items-center justify-between lg:px-24 px-9 py-6  pt-[11rem]">
      <div>
        <Heading>
          Uniting the world, <br /> one video call at a time
        </Heading>

        <p className="font-[1.5rem] mt-[1.5rem] xl:w-[662px]  leading-[2rem] text-[#667085]">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <div className="flex items-center gap-x-[1.25rem] mt-[2rem]">
          <a
            href="#"
            className="text-[1.125rem] hover:shadow-xl transition duration-300 rounded-[6.25rem] text-white shadow font-semibold  bg-[#175CD3] py-[1rem] px-[1.75rem]"
          >
            Start your free trial
          </a>
          <a
            href="#"
            className="flex items-center gap-x-[0.75rem]  text-[#175CD3] leading-[1.75rem] font-semibold text-[1.125rem]"
          >
            <img src={bot} alt="" />
            Discover AI assistant
          </a>
        </div>

        <div className="flex mt-[3rem] items-center gap-x-[1rem]">
          <div className=" flex items-center ">
            <figure className="-mr-4">
              <img src={avater5} alt="avater1" className="" />
            </figure>
            <figure className="-mr-4">
              <img src={avater1} alt="avater1" className="" />
            </figure>
            <figure className="-mr-4">
              <img src={avater2} alt="avater1" className="" />
            </figure>
            <figure className="-mr-4">
              <img src={avater3} alt="avater1" className="" />
            </figure>
            <figure>
              <img src={avater4} alt="avater1" className="" />
            </figure>
          </div>

          <div className="">
            <div className="flex items-center">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />

              <span className="ml-1 font-semibold text-[1rem] leading-[1.5rem] text-[#344054]">
                {" "}
                5.0
              </span>
            </div>
            <p className="leading-[1.5rem] font-medium text-[1rem] text-[#475467]">
              from 3,000+ reviews
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <img src={frame} alt="hero Avaters" />
      </div>
    </section>
  );
};
export default Hero;
