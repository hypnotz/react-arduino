import React from "react";
import Container from "@mui/material/Container";
import Lista from "./Lista";
import MenuList from "./MenuList";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <Header />
      <Container className="content">
        <MenuList />
        <Lista />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
