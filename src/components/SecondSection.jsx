import React from "react";
import styled from "styled-components";
import image1 from "../media/img5.webp";
import background from "../media/background.svg";
import netxBtn from "../media/next.svg";
import { motion } from "framer-motion";

const SecondSection = React.memo(() => {
  const transition = { type: "spring", duration: 3 };
  return (
    <MainContainer>
      <img src={background} alt={background} />
      <div>
        <span>
          <img src={image1} alt={image1} />
        </span>
        <div>
          <motion.p
            initial={{ marginTop: "100px" }}
            whileInView={{ marginTop: "0px" }}
            transition={transition}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </motion.p>
          <button>
            <img src={netxBtn} alt={netxBtn} />
          </button>
        </div>
      </div>
    </MainContainer>
  );
});
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  img {
    width: 100%;
    @media (max-width: 900px) {
      margin-bottom: 50px;
    }
  }
  div {
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 900px) {
      margin-top: 0;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      max-width: 100%;
    }
    span {
      max-width: 400px;
      width: 100%;
      @media (max-width: 900px) {
        max-width: 300px;
        height: 400px;
      }
      @media (max-width: 600px) {
        max-width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    div {
      max-width: 50%;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 100px;
      @media (max-width: 900px) {
        padding-left: 30px;
      }
      @media (max-width: 600px) {
        max-width: 100%;
        padding: 30px 10px;
      }
      p {
        max-width: 70%;
        width: 100%;
        font-family: "Didot", sans-serif;
        font-weight: 100;
        font-size: 20px;
        text-align: justify;
        @media (max-width: 900px) {
          max-width: 100%;
        }
      }
      button {
        background: transparent;
        border: none;
        outline: none;
        margin-top: 30px;
        transition: all 0.5s ease-in-out;
        width: 100px;
        img {
          width: 100%;
        }
        :hover {
          transform: translateX(10px);
          cursor: pointer;
        }
      }
    }
  }
`;
export default SecondSection;
