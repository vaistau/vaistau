import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Author from "../components/Author";

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Author />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Vaiva's Computer</title>;
