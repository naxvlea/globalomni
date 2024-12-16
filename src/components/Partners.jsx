import React from 'react';
import { motion } from 'framer-motion';
import gambar1 from '../assets/gambar1.png';
import gambar2 from '../assets/gambar2.png';
import gambar3 from '../assets/gambar3.png';
import gambar4 from '../assets/gambar4.png';
import gambar5 from '../assets/gambar5.png';
import gambar6 from '../assets/gambar6.png';
import gambar7 from '../assets/gambar7.png';
import gambar8 from '../assets/gambar8.png';
import gambar9 from '../assets/gambar9.png';
import gambar10 from '../assets/gambar10.png';
import gambar11 from '../assets/gambar11.png';
import gambar12 from '../assets/gambar12.png';
import gambar13 from '../assets/gambar13.png';
import gambar14 from '../assets/gambar14.png';
import gambar15 from '../assets/gambar15.png';
import gambar16 from '../assets/gambar16.png';
import gambar17 from '../assets/gambar17.png';
import gambar18 from '../assets/gambar18.png';
import gambar19 from '../assets/gambar19.png';
import gambar20 from '../assets/gambar20.png';
import gambar21 from '../assets/gambar21.png';

const LogoPartners = () => {
  const images = [
    { src: gambar20 },
    { src: gambar11 },
    { src: gambar13 },
    { src: gambar12 },
    { src: gambar10 },
    { src: gambar16 },
    { src: gambar2 },
    { src: gambar6 },
    { src: gambar3 },
    { src: gambar21 },
    { src: gambar18 },
    { src: gambar19 },
  ];

  const additionalImages = [
    { src: gambar4 },
    { src: gambar5 },
    { src: gambar14 },
    { src: gambar9 },
    { src: gambar1 },
    { src: gambar8 },
    { src: gambar7 },
    { src: gambar15 },
    { src: gambar17 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="our-partners" className="bg-transparant font-roboto mt-[-55px]">
      <main className="p-20">
        {/* First grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-zoom"
              variants={fadeIn}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover"
                width="300"
                height="200"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Second grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-4 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {additionalImages.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-zoom"
              style={{ height: "150px" }}
              variants={fadeIn}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <style jsx>{`
        .hover-zoom img {
          transition: transform 0.3s ease;
        }
        .hover-zoom:hover img {
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default LogoPartners;
