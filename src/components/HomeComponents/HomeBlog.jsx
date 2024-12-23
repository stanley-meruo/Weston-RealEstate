import Blog from "../Blog";
import Carouselblog from "../CarouselBlog";
import { motion } from "framer-motion";


const HomeBlog = () => {
  return (
    <>
      <section className="px-5 py-8 md:py-12 lg:py-14 xl:px-10">
        <motion.div
          className="text-center py-4"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl">OUR BLOGS</p>
          <p className="text-gray-700 text-sm md:text-base p-2">
            We have the best to suit your interes and are all afordable. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        <Carouselblog />
        <Blog />
      </section>
    </>
  );
};
export default HomeBlog;
