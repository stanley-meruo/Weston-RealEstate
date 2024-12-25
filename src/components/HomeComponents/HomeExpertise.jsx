import { useState, useEffect } from "react";
import axios from "axios";
import { FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";


const HomeExpertise = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setData(response.data); // Assuming response.data is the array
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

          <div className="grid xs:grid-cols-2 md:grid-cols-3">
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
                  className="h-[300px] w-full object-cover brightness-[.75]"
                />
                <div className="absolute top-[50%] w-full">
                  <p className="font-meduim uppercase text-xl text-center text-white">
                    {data.address.state}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </>
    );
}
export default HomeExpertise