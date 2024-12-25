import Button from "./Button";
import Estate1 from "../assets/estate-1.png";
import Estate2 from "../assets/estate-2.png";
import Estate3 from "../assets/estate-3.png";

const Blog = () => {
  return (
    <>
      <div className=" hidden lg:flex lg:gap-5 lg:p-6 xl:gap-10">
        <div className="grid p-3 shadow-lg shadow-gray-300">
          <img src={Estate1} className="w-full mx-auto" />
          <p className="text-lg text-center p-5">
            LUXURY REAL ESTATE MARKET COMPARISON IN LOS ANGELES
          </p>
          <p className="text-gray-700 pb-4 px-1">
            We have the oppoturnity to interview John Verhoff owner of Plumbing
            Nerds. They are a full service Plumbing Company Serving the
            Southwest Florida Area. Discover how he grew to 10 trucks and is up
            over $800k year over year (on pace for $2.7M this year). He shares
            some amazing insights on how they keep the
          </p>
          <Button
            title="READ MORE"
            type="button"
            className="bg-white font-montserrat text-black py-3 px-8 hover:bg-black  hover:text-white border border-black mx-auto my-4 lg:flex"
          />
        </div>
        <div className="grid p-3 shadow-lg shadow-gray-300">
          <img src={Estate2} className="w-full mx-auto" />
          <p className="text-lg text-center p-5">
            LUXURY REAL ESTATE MARKET COMPARISON IN LOS ANGELES
          </p>
          <p className="text-gray-700 pb-4 px-1">
            We have the oppoturnity to interview John Verhoff owner of Plumbing
            Nerds. They are a full service Plumbing Company Serving the
            Southwest Florida Area. Discover how he grew to 10 trucks and is up
            over $800k year over year (on pace for $2.7M this year). He shares
            some amazing insights on how they keep the
          </p>
          <Button
            title="READ MORE"
            type="button"
            className="bg-white font-montserrat text-black py-3 px-8 hover:bg-black  hover:text-white border border-black mx-auto my-4 lg:flex"
          />
        </div>
        <div className="grid p-3 shadow-lg shadow-gray-300">
          <img src={Estate3} className="w-full mx-auto" />
          <p className="text-lg text-center p-5">
            LUXURY REAL ESTATE MARKET COMPARISON IN LOS ANGELES
          </p>
          <p className="text-gray-700 pb-4 px-1">
            We have the oppoturnity to interview John Verhoff owner of Plumbing
            Nerds. They are a full service Plumbing Company Serving the
            Southwest Florida Area. Discover how he grew to 10 trucks and is up
            over $800k year over year (on pace for $2.7M this year). He shares
            some amazing insights on how they keep the
          </p>
          <Button
            title="READ MORE"
            type="button"
            className="bg-white font-montserrat text-black py-3 px-8 hover:bg-black  hover:text-white border border-black mx-auto my-4 lg:flex"
          />
        </div>
      </div>
    </>
  );
};
export default Blog;
