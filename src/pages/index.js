import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Vaiva's Computer</title>;
