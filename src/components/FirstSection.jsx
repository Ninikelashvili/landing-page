import React from "react";
import styled from "styled-components";
import image1 from "../media/img1.webp";
import image2 from "../media/img2.jpeg";
import image3 from "../media/img3.webp";
import image4 from "../media/img4.jpeg";
import image5 from "../media/img5.webp";
import { motion } from "framer-motion";

const FirstSection = React.memo(() => {
  const transition = { type: "spring", duration: 3 };
  return (
    <MainContainer>
      <div>
        <BannerImgDiv>
          <motion.img
            initial={{ width: "0" }}
            whileInView={{ width: "100%" }}
            transition={transition}
            src={image1}
            alt={image1}
          />
        </BannerImgDiv>
        <Projects>
          <span>
            <img src={image2} alt={image2} />
          </span>
          <span>
            <img src={image3} alt={image3} />
          </span>
          <span>
            <img src={image4} alt={image4} />
          </span>
          <span>
            <img src={image5} alt={image5} />
          </span>
        </Projects>
      </div>
    </MainContainer>
  );
});
const MainContainer = styled.section`
  width: 100%;
  padding-top: 100px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const Projects = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  @media (max-width: 900px) {
    max-width: 100%;
  }
  span {
    max-width: 300px;
    width: 100%;
    height: 300px;
    margin: 10px;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    @media (max-width: 1300px) {
      max-width: 250px;
      height: 250px;
    }
    @media (max-width: 1100px) {
      max-width: 200px;
      height: 200px;
    }
    @media (max-width: 900px) {
      max-width: 100%;
      height: 200px;
      margin: 10px 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const BannerImgDiv = styled(motion.div)`
  max-width: 300px;
  height: 500px;
  @media (max-width: 1300px) {
    max-width: 350px;
    height: 530px;
  }
  @media (max-width: 1100px) {
    max-width: 300px;
    height: 420px;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    height: 450px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default FirstSection;
