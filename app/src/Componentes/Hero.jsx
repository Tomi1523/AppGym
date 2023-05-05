import React from "react";
import "../Styles.css/Hero.css";
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import {motion} from "framer-motion"
import NumberCounter from 'number-counter';

const Hero = () => {

  const transition = {type: "spring", duration : 4}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>

        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile? "160px": "210px"}}
          whileInView={{left: "8px"}}
          transition={{...transition, type: "tween"}}
          
          ></motion.div>
          <span>the best fittnes blub in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
      <NumberCounter end={140} start={100} delay="4" preFix="+"/>

            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
            <NumberCounter end={975} start={875} delay="4" preFix="+"/>


            </span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={20} delay="4" preFix="+"/></span>
            <span>fittnes programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>


        <motion.div 
        transition={transition}
        initial={{right: "-1rem"}}
        whileInView={{ right:"4rem"}}
         className="heart-rate">

          <img src={heart}></img>
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>



        <img src={hero_image} className="hero-image"></img>
        <motion.img
         initial={{right:"11rem"}}
         whileInView={{right: "20rem"}}
         transition={transition}
        
        
         src={hero_image_back} className="hero-image-back"></motion.img>

        <motion.div
         transition={transition}
        initial={{right: "-1rem"}}
        whileInView={{ right:"28rem"}}
         className="calories">
          <img src={calories}></img>
          <div>
            <span>Calories Burned</span>
            <span>440 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
