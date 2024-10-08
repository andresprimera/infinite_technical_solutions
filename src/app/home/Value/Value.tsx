"use client";

import Section from "@/app/components/Section";
import styles from "./value.module.css";
import Highlight from "@/app/components/Highlight";
import Image from "next/image";
import img1 from "../../../../public/assets/img/value/1.webp";
import img2 from "../../../../public/assets/img/value/2.webp";
import img3 from "../../../../public/assets/img/value/3.webp";
import stripImg from "../../../../public/assets/img/value/lamp.png";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/Button";

const Value = () => {
  const [activeImg, setActiveImg] = useState<number>(0);

  const images = [
    { text: "Health Care Products", image: img1 },
    { text: "Medical Equipment", image: img2 },
    { text: "Technical Service", image: img3 },
  ];

  const stripInfo = [
    {
      title: "Optimal performance",
      description: (
        <p>
          In all dental and <br /> medical equipment <br /> repair.
        </p>
      ),
    },
    {
      title: (
        <p>
          Well-
          <br /> trained
        </p>
      ),
      description:
        "All of our technicians are certified and receive extensive training in-house and from our manufacturing partners.",
    },
    {
      title: "Full-Service dealership",
      description:
        "We arrive at your office fully stocked with supplies from most manufacturers.",
    },
  ];

  return (
    <Section
      id="value"
      title={
        <h2>
          Our <Highlight color="secondary">value offer</Highlight>
        </h2>
      }
    >
      <div className={styles.content}>
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className={styles.info}
        >
          <h3 className={styles.heading}>
            We guarantee an{" "}
            <Highlight color="secondary">agile and cost-effective</Highlight>{" "}
            actions
          </h3>
          <p className={styles.description}>
            We’re specialists <b>in dental and medical equipment repair</b>, our
            service will be received as soon as possible and most work will be
            done on-site using high quality parts.
          </p>
          <div className={styles.row}>
            <Button type="outlined-contrast" onClick={() => setActiveImg(0)}>
              Health care products
            </Button>
            <Button type="outlined-contrast" onClick={() => setActiveImg(1)}>
              Medical Equipment
            </Button>
            <Button type="outlined-contrast" onClick={() => setActiveImg(2)}>
              Technical service
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.3,
          }}
          className={styles.images}
        >
          {images.map((img, index) => {
            const isActiveImg = activeImg === index;

            return (
              <button
                key={img.text}
                style={{ width: isActiveImg ? "50%" : "25%" }}
                className={styles.imageContainer}
                onClick={() => setActiveImg(index)}
              >
                <Image
                  src={img.image}
                  alt={`image-${index}`}
                  style={{ width: "100%" }}
                />
                <div
                  className={styles.background}
                  style={{
                    background: isActiveImg
                      ? "var(--color-secondary)"
                      : "#C9CAC9",
                  }}
                ></div>
                <p
                  style={{
                    opacity: isActiveImg ? 1 : 0,
                  }}
                >
                  {img.text}
                </p>
              </button>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        className={styles.stripContainer}
        initial={{ y: "10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.75 }}
      >
        <div className={styles.strip}>
          <motion.div
            className={styles.stripImgContainer}
            animate={{
              y: [
                Math.random() * 20,
                Math.random() * 20,
                0,
                Math.random() * 20,
                Math.random() * 20,
                0,
                Math.random() * 20,
                Math.random() * 20,
                0,
                Math.random() * 20,
                Math.random() * 20,
                0,
              ],
              x: [
                Math.random() * 30,
                Math.random() * 30,
                0,
                Math.random() * 30,
                Math.random() * 30,
                0,
                Math.random() * 30,
                Math.random() * 30,
                0,
                Math.random() * 30,
                Math.random() * 30,
                0,
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Image src={stripImg} alt="strip-image" />
          </motion.div>
          <div className={styles.stripTextContainer}>
            {stripInfo.map((info, index) => (
              <motion.div
                initial={{ y: "25%", opacity: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: (index * 2) / 10 }}
                key={String(info.title)}
                className={styles.stripText}
              >
                <div className={styles.stripHeading}>{info.title}</div>
                <div className={styles.stripDescription}>
                  {info.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Value;
