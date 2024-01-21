import shopify from "../assets/Shopify.png";
import coinbase from "../assets/Coinbase.png";
import dropbox from "../assets/Dropbox svg.png";
import intercom from "../assets/Intercom svg.png";
import marvel from "../assets/Marvel svg.png";
import automattic from "../assets/Automattic svg.png";

const Companies = () => {
  return (
    <section className="py-20 px-24">
      <p className="text-[1.25rem]  text-center font-medium text-[#475467]  leading-[1.875rem] ">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="mt-10 flex items-center gap-x-[4.3125rem]">
        <figure>
          <img src={shopify} alt="shopify" />
        </figure>
        <figure>
          <img src={coinbase} alt="coinbase" />
        </figure>
        <figure>
          <img src={dropbox} alt="dropbox" />
        </figure>
        <figure>
          <img src={intercom} alt="intercom" />
        </figure>
        <figure>
          <img src={marvel} alt="marvel" />
        </figure>
        <figure>
          <img src={automattic} alt="automattic" />
        </figure>
      </div>
    </section>
  );
};
export default Companies;
