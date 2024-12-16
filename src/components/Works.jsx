import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import WorksServiceModal from "./WorksServiceModal";

const ProjectCard = ({ index, name, description, image, videoSrc, onClick }) => {
  const descriptionLines = description.split(" | ");

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Animasi hanya berjalan sekali saat 30% elemen terlihat
      onClick={() => onClick({ title: name, videoSrc })}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#FFC94A] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {descriptionLines.map((line, idx) => (
            <p key={idx} className="mt-1 text-secondary text-[14px]">
              {line}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSelectedProject(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = ({ title, videoSrc }) => {
    setSelectedProject({ title, videoSrc });
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className={`${styles.sectionHeadText}`}>Our Offerings.</h2>
      </motion.div>

      <div id="Works" className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-justify justify-text mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Our solutions are strategically placed in prime Bali locations, ensuring maximum <br />
          exposure and high-impact advertising. From the airport to top destination hubs, <br />
          we guarantee your campaign reaches the most viewers for an unforgettable <br />brand experience.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-text justify-content">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            onClick={openModal}
            index={index}
            {...project}
          />
        ))}
      </div>

      {selectedProject && (
        <WorksServiceModal
          title={selectedProject.title}
          videoSrc={selectedProject.videoSrc}
          onClose={closeModal}
        />
      )}

      <motion.p
        className={`${styles.sectionHeadText1} justify-text mt-[200px]`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        Our partners.
      </motion.p>
    </>
  );
};

export default SectionWrapper(Works, "Works");
