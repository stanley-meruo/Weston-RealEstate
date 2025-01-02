import { useState, useEffect } from "react";
import axios from "axios";
import { FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";


const HomeSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid">
        <FiLoader className="w-10 h-10 sm:w-12 sm:h-12 mx-auto animate-spin" />
      </div>
    );
  }
    return (
      <>
        <section className="px-5 py-10 md:py-16 lg:py-20 lg:px-10 xl:pt-24 xl:px-16">
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
          <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
            {data.map((data, index) => (
              <motion.div
                key={data._id || index}
                className="relative"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 2.5,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img
                  src={data.images[0]}
                  className="w-full h-[300px] lg:h-[400px] xl:h-[480px]"
                />
                <div className="absolute bottom-0 bg-transparent backdrop-brightness-50 w-full py-3">
                  <p className="font-meduim text-lg text-center text-white">
                    {data.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </>
    );
}
export default HomeSection