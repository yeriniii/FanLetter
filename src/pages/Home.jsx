import React from "react";
import Header from "../components/headers/Header";
import LetterForm from "../components/Letters/LetterForm";
import LetterList from "../components/Letters/LetterList";
import styled from "styled-components";
import Layout from "../components/headers/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { __getDatas } from "../redux/modules/data";

function Home() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.data);
  useEffect(() => {
    // 페이지가 로드될 때 데이터 가져오기
    dispatch(__getDatas());
  }, [dispatch]);

  if (isLoading) {
    return <div>loading..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
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
