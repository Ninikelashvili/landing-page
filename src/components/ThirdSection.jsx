import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import background from "../media/background-des.svg";
import { sliderData } from "../sliderData";
import prevBnt from "../media/prevBtn.svg";
import nextBnt from "../media/nextBtn.svg";
import { motion } from "framer-motion";

const ThirdSection = React.memo(() => {
  const [selected, setSelected] = useState(0);
  const [width, setWidth] = useState();
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const sLength = sliderData.length;
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
      <WebResolution>
        <div>
          <div>
            <img src={background} alt={background} />
          </div>
          <span>
            <button onClick={prevHandler}>
              <img src={prevBnt} alt={prevBnt} />
            </button>
            <p>
              0 {index} / 0{sLength}
            </p>
            <button onClick={nextHandler}>
              <img src={nextBnt} alt={nextBnt} />
            </button>
          </span>
        </div>
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          <motion.img src={sliderData[selected].image} alt="slider" />
        </motion.div>
      </WebResolution>
      <MobResolution>
        <section>
          <Carousel ref={carousel}>
            <InnerCarousel
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {sliderData?.map((image, i) => {
                return (
                  <CarouselImage key={i}>
                    <img src={image.image} alt="" />
                  </CarouselImage>
                );
              })}
            </InnerCarousel>
          </Carousel>
        </section>
      </MobResolution>
    </MainContainer>
  );
});
const MobResolution = styled.section`
  padding-bottom: 100px;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
const WebResolution = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 100px 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  margin: 0 !important;
`;
const InnerCarousel = styled(motion.section)`
  display: flex;
  flex-direction: row !important;
`;
const CarouselImage = styled(motion.span)`
  min-width: 300px;
  height: 400px;
  margin: 0 20px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const MainContainer = styled.section`
  width: 100%;
  section {
    width: 100%;
  }
  div {
    div {
      img {
        max-width: 90%;
      }
    }
    :first-child {
      margin-right: 60px;
    }
    :nth-child(2) {
      max-width: 700px;
      width: 100%;
      height: 500px;
      @media (max-width: 876px) {
        height: 400px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    span {
      display: flex;
      align-items: center;
      margin-top: 50px;
      button {
        border: none;
        outline: none;
        background: transparent;
        :hover {
          cursor: pointer;
        }
      }
      p {
        margin: 0 15px;
      }
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
export default ThirdSection;
