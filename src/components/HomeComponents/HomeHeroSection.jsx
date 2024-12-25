import Button from "../Button";
import Hero from "/src/assets/hero.png";
import { motion } from "framer-motion";


const HomeHeroSection = () => {
  // const [animate, setAnimate] = useState(false);
  // const [scrollDirection, setScrollDirection] = useState(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPosition = window.scrollY;
  //     const scrollDirection = currentScrollPosition > 100 ? "down" : "up";
  //     setScrollDirection(scrollDirection);
  //     if (scrollDirection === "down") {
  //       setAnimate(false);
  //     } else if (scrollDirection === "up") {
  //       setAnimate(true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <section className="overflow-x-hidden lg:flex lg:flex-row-reverse lg:items-center lg:gap-6 xl:gap-10">
        <motion.div
          className="w-full lg:w-4/5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={Hero} className="w-full h-auto" />
        </motion.div>

        <motion.div
          className="text-center px-5 xs:py-5 md:px-10 md:mt-6 lg:text-left xl:pt-16 xl:pl-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{
            duration: 2.5,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="font-medium text-3xl my-4 md:text-4xl lg:text-[44px] lg:leading-[44px] lg:mt-6 xl:text-[55px] xl:leading-[52px] xxl:text-6xl">
            Trusted Real Estate Property for you
          </p>
          <p className="text-gray-700 text-sm md:text-base lg:my-6 ">
            Looking for your dream house or property. Search here and select
            your best one from more than 1 million listing
          </p>
          <div className="flex items-center justify-center gap-4 my-6 text-sm md:my-8 lg:justify-start lg:my-0 xl:my-12">
            <Button
              title="Discover More"
              type="button"
              className="bg-black text-white font-light font-montserrat py-3 px-5  border border-black sm:px-8 lg:hidden"
            />
            <Button
              title="Discover Properties"
              type="button"
              className="bg-black text-white font-light font-montserrat py-3 px-8 border border-black hidden lg:flex"
            />
            <Button
              title="Learn More"
              type="button"
              className="bg-white py-3 px-5 font-light font-montserrat border border-black hover:bg-black hover:text-white sm:px-8"
            />
          </div>
          <div className="flex items-center justify-center gap-2.5 p-2 text-sm border-t-0 shadow-lg drop-shadow-lg shadow-gray-300 my-10 w-full xs:gap-8 xs:p-4 sm:w-[500px] sm:mx-auto sm:gap-12 lg:w-[450px] lg:mx-0 lg:mt-6 xl:w-[500px] xl:gap-10">
            <p className="grid text-center">
              35+<span className="text-[10px]">YEARS IN BUSINESS</span>
            </p>
            <p className="grid text-center">
              200+M
              <span className="text-[10px]">DEAL VOLUME IN PAST 12 YEARS</span>
            </p>
            <p className="grid text-center">
              $1B<span className="text-[10px]">IN TOTAL SALES</span>
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default HomeHeroSection;
