import logo from "/WESTON-footer.svg";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white p-5">
        <div className="lg:px-8 lg:flex lg:items-center lg:justify-between lg:gap-5 lg:py-5 xl:px-12">
          <div className="text-center py-8 lg:-mr-60 xl:-mr-20">
            <Link to="/">
              <img src={logo} className="mx-auto my-4 lg:mx-0 lg:-mt-6" />
            </Link>
            <p className=" text-gray-300 text-sm md:text-base lg:text-start lg:mt-10 lg:w-[50%] xl:w-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ulla
            </p>
          </div>
          <div className="py-5 lg:-mt-5 ">
            <p className="text-xs md:text-sm">
              For exclusive news and market updates sign up for our newsletter
            </p>
            <div className="flex items-center gap-4 py-4 text-black relative lg:mt-7 lg:w-[350px] xl:w-[370px]">
              <input
                type="email"
                id="text"
                placeholder="Your Email Address"
                className="text-xs w-full px-10 py-3 md:text-sm "
              />
              <div className="absolute bottom-6 pl-2 md:botto">
                <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <Button
                title="SUBMIT"
                type="button"
                className="bg-black text-white text-sm py-2 px-5 hover:bg-white hover:text-black border font-montserrat border-white mx-auto md:text-base"
              />
            </div>
          </div>
          <div className="flex justify-between text-sm md:text-base lg:mt-9 lg:gap-5">
            <div className="grid gap-4 mt-px lg:pr-1">
              <p>CONTACT US</p>
              <div className="grid gap-4 lg:mt-6">
              <p>(+234)70 6345 5405</p>
              <p>Contact@dormain.com</p>
              <p>
                24 Estate View, Florida, <br /> New York, USA
              </p>
              </div>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="text-xs mt-5 text-gray-500 lg:px-8 xl:px-12">
          <div className="border border-white w-full mb-2"></div>
          <div className="flex flex-row justify-between">
            <p>Copyright 2024 @Weston All Right Resreved.</p>
            <p>Stanley Meruo</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
