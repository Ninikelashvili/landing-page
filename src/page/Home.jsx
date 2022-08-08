import React from "react";
import styled from "styled-components";
import ContactSection from "../components/ContactSection";
import FirstSection from "../components/FirstSection";
import FourthSection from "../components/FourthSection";
import Header from "../components/Header";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

const Home = React.memo(() => {
  return (
    <>
      <HomePage>
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </HomePage>
      <ContactSection />
    </>
  );
});
const HomePage = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;
export default Home;
