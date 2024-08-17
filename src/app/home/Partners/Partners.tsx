import Highlight from "@/app/components/Highlight";
import styles from "./partners.module.css";
import owandy from "../../../../public/assets/svg/partners/owandy-logo.svg";
import ads from "../../../../public/assets/svg/partners/ads-logo.svg";
import basevac from "../../../../public/assets/svg/partners/basevac-logo.svg";
import brandmax from "../../../../public/assets/svg/partners/brandmax-logo.svg";
import dansereau from "../../../../public/assets/svg/partners/dansereau-logo.svg";
import dci from "../../../../public/assets/svg/partners/dci-logo.svg";
import kinetic from "../../../../public/assets/svg/partners/kinetic-logo.svg";
import rpi from "../../../../public/assets/svg/partners/rpi-logo.svg";
import tpc from "../../../../public/assets/svg/partners/tpc-logo.svg";
import vector from "../../../../public/assets/svg/partners/vector-logo.svg";
import bienAir from "../../../../public/assets/svg/partners/bien-air-logo.svg";
import bds from "../../../../public/assets/svg/partners/bds-logo.jpeg";
import jds from "../../../../public/assets/svg/partners/jds-logo.png";
import drna from "../../../../public/assets/svg/partners/drna-logo.svg";
import flight from "../../../../public/assets/svg/partners/flight-logo.svg";
import enbio from "../../../../public/assets/svg/partners/enbio-logo.png";
import Image from "next/image";
import itsLogo from "../../../../public/assets/img/partners/its-logo.png";
import { motion } from "framer-motion";

const Partners = () => {
  const logos = [
    owandy,
    ads,
    basevac,
    brandmax,
    dansereau,
    dci,
    kinetic,
    rpi,
    tpc,
    vector,
    bienAir,
    bds,
    jds,
    drna,
    flight,
    enbio,
  ];

  return (
    <div className={styles.container} id="partners">
      <p>
        Discover some of ITS{" "}
        <span>
          <Image src={itsLogo} alt="its-logo" width={50} height={50} />
        </span>{" "}
        manufacturing partners:
      </p>
      <div className={styles.sliderContainer}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={styles.slider}
        >
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="partner-logo" />
          ))}
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="partner-logo" />
          ))}
        </motion.div>
      </div>
      <div className={styles.sliderContainerMobile}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={styles.slider1}
        >
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="partner-logo" />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={styles.slider2}
        >
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt="partner-logo" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
