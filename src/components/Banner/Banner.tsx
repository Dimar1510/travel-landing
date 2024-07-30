import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import HeadAnimation from "../Animation/HeadAnimation";
import Header from "../Header/Header";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-banner bg-no-repeat bg-center bg-cover clip flex flex-col items-center text-center text-white before:size-full before:absolute before:bg-gradient-to-b before:from-black/50 before:to-black/10">
      <Header />
      <div className="mt-16 md:mt-7 mb-14 z-10">
        <img src={logo} alt="logo" className="w-52" />
      </div>
      <div className="z-10">
        <h1 className="text-3xl md:text-6xl 2xl:text-8xl capitalize font-bold md:w-[700px] 2xl:w-[1200px] px-4 mx-auto textShadow z-50">
          <HeadAnimation text="Welcome to mountain expedition club" />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="md:w-[480px] 2xl:max-w-screen-sm 2xl:text-2xl mx-auto mt-4 textShadow px-3 font-medium"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          sapiente excepturi quo inventore neque numquam lorem.
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
