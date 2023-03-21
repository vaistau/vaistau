import * as React from "react";
import Header from "../components/Header";
import Author from "../components/Author";
import Work from "../components/Work";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Author />
        <Work />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Vaiva's Computer</title>;
