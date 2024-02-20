import React from "react";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import Layout from "components/Layout";

function Home() {
  return (
    <Container>
      <Layout />
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
