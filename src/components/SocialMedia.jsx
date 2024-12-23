import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const SocialMedia = () => {

    return (
      <>
        <div className="grid gap-4 text-sm">
          <p className="text-center">FOLLOW US</p>
          <div className="flex items-center gap-4 lg:mt-6">
            <FaFacebook className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaLinkedin className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
          </div>
        </div>
      </>
    );
}
 export default SocialMedia;
