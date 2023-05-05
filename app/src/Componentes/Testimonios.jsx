
import React, { useState } from "react";
import "../Styles.css/Testimonios.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion"

const Testimonios = () => {

  const transition = { type: "spring", duration: 4 };
  const [selected, setSelected] = useState(0);

  const tLength = testimonialsData.length;

  const handleLeftArrowClick = () => {
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
  };

  const handleRightArrowClick = () => {
    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
  };

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}




        >{testimonialsData[selected].review}</motion.span>
        <span id="name">{testimonialsData[selected].name}</span>
        <span> - {testimonialsData[selected].status}</span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}

        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}

        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}



          src={testimonialsData[selected].image} />
        <div className="arrows">
          <img onClick={handleLeftArrowClick} src={leftArrow} />
          <img onClick={handleRightArrowClick} src={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
