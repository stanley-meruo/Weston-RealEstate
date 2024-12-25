import Button from "../Button";
import ImageSlider from "../ImageSlider";
import Skycrapper from "/src/assets/skycrapper.png";
import { motion } from "framer-motion";


const HomeExclusive = () => {
  return (
    <>
      <section className="p-5 overflow-x-hidden lg:px-10 xl:px-16">
        <motion.div
          className="text-center py-5"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-2xl lg:text-3xl">WHO WE ARE?</p>
          <p className="text-gray-700 text-sm md:text-base pt-2">
            Marius We have the best to suit your interes and are all afordable.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>

        <div className="py-5 lg:flex lg:items-center lg:gap-10 lg:my-4 xl:gap-20 xxl:gap-28">
          <motion.div
            className="text-center lg:text-left lg:w-3/4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p className="text-xl sm:text-2xl lg:tracking-widest lg:text-3xl lg:my-8 lg:w-96 xl:my-12">
              MEET THE WESTON REAL ESTATE
            </p>
            <p className="text-gray-700 my-6 text-sm md:text-base lg:my-10">
              We have the best to suit your interes and are all afordable. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              corporis. Delectus ex cum quae voluptatibus similique odit,
              temporibus perferendis consequatur, tempore placeat possimus
              commodi necessitatibus debitis totam quisquam fugiat voluptate.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              voluptas sapiente eos, qui atque, nulla modi.
            </p>
            <p className="text-gray-700 my-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              perferendis accusantium est, tempora unde iusto! Consectetur,
              ipsum blanditiis nesciunt necessitatibus dolorem ducimus aliquam
              maiores voluptatibus corporis excepturi inventore neque
              accusantium. <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              voluptas sapiente eos, qui atque, nulla modi. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Suscipit voluptas sapiente
              eos, qui atque, nulla modi.
            </p>
            <Button
              title="LEARN MORE"
              type="button"
              className="bg-white font-montserrat text-black py-2 px-5 hover:bg-black hover:text-white border border-black my-4 hidden lg:block lg:my-8"
            />
          </motion.div>
          <motion.div
            className="grid lg:w-3/4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img
              src={Skycrapper}
              className="py-4 pr-1 w-full h-auto mx-auto lg:min-h-[670px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-5">
        <motion.div
          className="text-center px-5"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl">EXCLUSIVE LISTINGS</p>
          <p className="text-gray-600 text-sm md:text-base py-2 sm:pb-6">
            Amet mollitia a voluptatem deserunt, eius harum ullam, ab corrupti
            eum delectus atque quibusdam ratione? Cupiditate, impedit dolor
            inventore quidem in ducimus!
          </p>
        </motion.div>
        <ImageSlider />
        <div className="grid text-sm font-medium font-montserrat">
          <Button
            title="View All Properties"
            type="button"
            className="bg-white font-montserrat text-black py-3 px-5 hover:bg-black hover:text-white border border-black mx-auto my-4 lg:hidden lg:my-8"
          />
        </div>
      </section>
    </>
  );
};
export default HomeExclusive;
