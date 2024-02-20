import React from "react";
import Header from "../components/headers/Header";
import LetterForm from "../components/Letters/LetterForm";
import LetterList from "../components/Letters/LetterList";
import styled from "styled-components";
import Layout from "../components/headers/Layout";

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
