import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }, // Animasi teks muncul bertahap
    },
};

const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        // Mengatur posisi scroll ke atas setiap kali halaman dimuat
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setSelectedService(null);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="about-container min-h-screen flex flex-col pt-20"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariant}
        >
            {/* Introduction Section */}
            <motion.div variants={fadeInVariant}>
                <p className={styles.sectionSubText2}>Introduction</p>
                <h2 className={styles.sectionHeadText2}>Global Omni Digital</h2>
            </motion.div>

            {/* Description Section */}
            <motion.p
                variants={fadeInVariant}
                className="mt-2 text-black text-[17px] max-w-3xl leading-[30px] mx-auto text-justify"
            >
                At Global Omni Digital, the advertising powerhouse of GPAM, our mission is to pioneer captivating projects and lead the charge in Bali's international advertising arena. We are the driving force behind innovative campaigns, providing a platform for creative visionaries to craft cutting-edge content that effectively communicates brands' messages to the masses using the latest in 3D LED Videotron technology.
            </motion.p>

            {/* Additional Information Section */}
            <motion.p
                variants={fadeInVariant}
                className="mt-[20px] text-black text-[17px] max-w-3xl leading-[30px] mx-auto text-justify mb-[300px]"
            >
                With our strategic positioning, we've secured four coveted spots along Bali's main thoroughfare, making us the premier advertising destination on the island. Spearheading our creative endeavors is Mr. Roman Ro, our visionary Creative Art Director, whose digital masterpieces have ignited virality on TikTok and Instagram.
                <br />
                <br />
                <a
                    href="https://www.instagram.com/globalomnidigital"
                    target="_blank"
                    className="mr-4 text-secondary mt-[30px]"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                    href="https://www.tiktok.com/@globalomnidigital"
                    target="_blank"
                    className="text-secondary mt-[90px]"
                >
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                </a>
            </motion.p>

            {/* Footer Section */}
            <div>
                <Footer />
            </div>
        </motion.div>
    );
};

export default About;
