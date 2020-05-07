import React from "react";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import { RouteComponentProps } from "@reach/router";

interface HomePageProps extends RouteComponentProps {
  name?: string;
}

const Home: React.FC<HomePageProps> = () => (
  <>
    <Header />
    <Gallery heading="Curated photos" />
  </>
);

export default Home;
