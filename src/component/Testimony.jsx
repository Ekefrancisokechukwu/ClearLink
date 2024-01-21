import shopifyLogo from "../assets/shopifymini svg.png";
import star from "../assets/star.png";
import avater from "../assets/avatartest.png";
import arrowRight from "../assets/arrowR.png";
import arrowLeft from "../assets/arrowL.png";
import contents from "../assets/Contents.png";

const Testimony = () => {
  return (
    <section className="bg-[#F9FAFB] px-[5rem] flex  items-center justify-between gap-x-[4rem]  py-16">
      <div className="w-[40rem]">
        <div>
          <img src={shopifyLogo} alt="shopify logo" />
        </div>

        <div className="flex items-center mt-12">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>

        <div className="mt-10">
          <h1 className="font-semibold text-[2.75rem] text-[#1D2939] tracking-[-0.08rem] leading-[4.5rem]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h1>
        </div>

        <div className="flex mt-11 justify-between items-center">
          <div className="flex items-center gap-x-3 ">
            <figure>
              <img src={avater} alt="avater" />
            </figure>
            <div className="">
              <h2 className="text-[1.25rem] leading-[1.8rem] text-[#101828] font-semibold">
                Sarah Thompson
              </h2>
              <p className="text-[#475467] text-[1.125rem] leading-[1.7rem]">
                Project Manager, Shopify
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <button>
              <img src={arrowLeft} alt="arrow" />
            </button>
            <button>
              <img src={arrowRight} alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src={contents} alt="mockup" />
      </div>
    </section>
  );
};
export default Testimony;
