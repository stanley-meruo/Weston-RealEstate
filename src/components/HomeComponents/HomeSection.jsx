import CarouselAPI from "../../utilities/CarouselAPI";
import { motion } from "framer-motion";

const HomeSection = () => {
    return (
      <>
        <section className="overflow-x-hidden px-5 py-10 md:py-16 lg:py-20 lg:px-10 xl:pt-24 xl:px-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p className="text-xl mt-4 sm:text-2xl lg:text-3xl lg:mt-6">
              WHAT AREA ARE YOU LOOKING FOR?
            </p>
            <p className="text-gray-700 text-sm md:text-base my-5 sm:mb-8 ">
              We have the best to suit your interes and are all afordable. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>
          <CarouselAPI />
        </section>
      </>
    );
}
export default HomeSection