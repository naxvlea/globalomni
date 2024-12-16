import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFD768]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-black`}>Hi, We're <span className="text-[#FFD768]"><br />Global Omni <br />Digital</span></h1>
           <p className={`${styles.heroSubText} mt-2 text-black-100`}>
          Your prayers have been answered. <br />
          We leverage cutting-edge technology <br />
          for innovative advertising.
          </p> 
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-[400px]'>
        
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2' style={{ borderColor: 'black' }}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black mb-1'
            />
          </div>
        
      </div> */}
    </section>
  );
};

export default Hero;
