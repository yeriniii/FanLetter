import React from "react";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Header />
      <LetterForm />
      <LetterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;
