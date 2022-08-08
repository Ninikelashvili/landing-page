import React, { useState } from "react";
import styled from "styled-components";
import { projectsData } from "../sliderData";
import prevBnt from "../media/prevBtn.svg";
import nextBnt from "../media/nextBtn.svg";
import { motion } from "framer-motion";

const FourthSection = React.memo(() => {
  const [selected, setSelected] = useState(0);
  const sLength = projectsData.length;
  const prevHandler = () => {
    selected === 0 ? setSelected(sLength - 1) : setSelected((prev) => prev - 1);
  };
  const nextHandler = () => {
    selected === sLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
  };
  const index = selected + 1;

  const transition = { type: "spring", duration: 3 };
  return (
    <MainContainer>
      <h3>Our Projects</h3>
      <section>
        <div>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            <h4>{projectsData[selected].title} </h4>
            <p>{projectsData[selected].description}</p>
          </motion.span>
          <Navigation>
            <h4>Architect</h4>
            <motion.p
              key={selected}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={transition}
            >
              {projectsData[selected].architect}
            </motion.p>
            <div>
              <button onClick={prevHandler}>
                <img src={prevBnt} alt={prevBnt} />
              </button>
              <h5>
                {" "}
                0 {index} / 0{sLength}
              </h5>
              <button onClick={nextHandler}>
                <img src={nextBnt} alt={nextBnt} />
              </button>
            </div>
          </Navigation>
        </div>
        <ImgContainer
          key={selected}
          initial={{ opacity: 0, translateX: "100%" }}
          animate={{ opacity: 1, translateX: "0" }}
          exit={{ opacity: 0, translateX: "100%" }}
          transition={transition}
        >
          <img src={projectsData[selected].image} alt="slider" />
        </ImgContainer>
      </section>
    </MainContainer>
  );
});
const Navigation = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  h4 {
    font-family: "Didot", sans-serif;
    font-size: 15px !important;
    color: #656565;
  }
  p {
    font-family: "Didot", sans-serif;
    font-size: 15px !important;
    color: #000;
    margin-bottom: 30px;
  }
  div {
    display: flex;
    flex-direction: row !important;
    align-items: center !important;
    button {
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
    }
    h5 {
      margin: 0 30px;
      font-family: "Didot", sans-serif;
    }
  }
`;
const ImgContainer = styled(motion.div)`
  max-width: 700px;
  width: 100%;
  height: 500px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 850px) {
    max-width: 100%;
  }
  @media (max-width: 550px) {
    height: 300px;
  }
  @media (max-width: 400px) {
    height: 250px;
  }
`;
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 0;
  h3 {
    font-family: "Didot", sans-serif;
    font-size: 50px;
    color: #000;
    font-weight: 100;
    border-bottom: solid 0.2px #000;
    width: 100%;
    margin-bottom: 60px;
    padding-bottom: 70px;
  }
  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0;
    @media (max-width: 850px) {
      flex-direction: column;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      span {
        h4 {
          font-family: "Didot", sans-serif;
          font-size: 25px;
          color: #000;
          letter-spacing: 2px;
        }
        p {
          font-family: "Didot", sans-serif;
          font-size: 15px;
          color: #656565;
          margin-top: 10px;
          max-width: 100%;
          min-height: 50px;
        }
      }
    }
  }
`;
export default FourthSection;
