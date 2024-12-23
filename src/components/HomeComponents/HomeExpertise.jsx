import HomeExpertiseAPI from "../../utilities/HomeExpertiseAPI";
import { motion } from "framer-motion";

const HomeExpertise = () => {
    return (
      <>
        <section className="overflow-x-hidden px-5 py-10 lg:py-14 lg:px-10 xl:px-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl">AREA OF EXPERTISE</p>
            <p className="text-gray-600 text-sm md:text-base py-4 sm:pb-8">
              Amet mollitia a voluptatem deserunt, eius harum ullam, ab corrupti
              eum delectus atque quibusdam ratione? Cupiditate, impedit dolor
              inventore quidem in ducimus!
            </p>
          </motion.div>

          <HomeExpertiseAPI />
        </section>
      </>
    );
}
export default HomeExpertise