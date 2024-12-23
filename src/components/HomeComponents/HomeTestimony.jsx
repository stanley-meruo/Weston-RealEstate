import Testimony from "../Testimony";



const HomeTestimony = () => {
    return (
      <>
        <section className="px-5 py-12 bg-gray-100 sm:py-16 lg:px-2 xl:px-8">
          <div className="text-center py-4">
            <p className="text-xl sm:text-2xl lg:text-3xl ">
              WHAT OUR CLIENT SAYS
            </p>
            <p className="text-gray-600 text-sm md:text-base py-2">
              We have the best to suit your interes and are all afordable. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-white p-4 lg:px-12 lg:m-8">
            <Testimony />
          </div>
        </section>
      </>
    );
}
export default HomeTestimony