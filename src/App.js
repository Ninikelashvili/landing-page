import styled from "styled-components";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};
const AppContainer = styled.div`
  width: 100%;
`;

export default App;
