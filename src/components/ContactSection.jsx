import React from "react";
import styled from "styled-components";

const ContactSection = React.memo(() => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <FooterSection>
      <ContainerFooter>
        <h4>Contact us</h4>
        <form onSubmit={submitHandler}>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Text us"
            ></textarea>
            <button>Send</button>
          </div>
        </form>
      </ContainerFooter>
    </FooterSection>
  );
});

const FooterSection = styled.footer`
  background-color: #25282a;
  padding: 100px 0;
`;
const ContainerFooter = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  h4 {
    font-family: "Didot", sans-serif;
    font-size: 25px;
    color: #d3d3d3;
    letter-spacing: 2px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-end;
      }
      button {
        border: none;
        outline: none;
        background: transparent;
        font-family: "Didot", sans-serif;
        letter-spacing: 1px;
        color: #fff;
        border-bottom: solid 0.2px #b8b8b8;
        padding: 15px 40px;
        margin-right: 200px;
        cursor: pointer;
        @media (max-width: 1080px) {
          margin-right: 70px;
        }
        @media (max-width: 900px) {
          margin-right: 50px;
        }
        @media (max-width: 900px) {
          margin-right: 5px;
        }
      }
    }
  }
  input,
  textarea {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: solid 0.2px #b8b8b8;
    max-width: 50%;
    width: 100%;
    padding: 20px 20px 20px 0;
    margin: 30px 50px 30px 0;
    :focus {
      color: #b8b8b8;
      font-family: "Didot", sans-serif;
    }
    ::placeholder {
      color: #b8b8b8;
      font-family: "Didot", sans-serif;
    }
    @media (max-width: 600px) {
      max-width: 100%;
      margin: 20px 5px;
      padding: 20px;
    }
  }
  textarea {
    height: 50px;
    max-width: 70%;
    width: 100%;
    :focus {
      color: #b8b8b8;
      font-family: "Didot", sans-serif;
    }
    ::placeholder {
      font-family: "Didot", sans-serif;
      color: #b8b8b8;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
`;
export default ContactSection;
