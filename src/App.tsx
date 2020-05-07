import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";

const HomeComponent = (props: RouteComponentProps) => <Home {...props} />;
const SearchPage = (props: RouteComponentProps) => <Search {...props} />;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ScrollToTop />
    <Router>
      <HomeComponent path="/" />
      <SearchPage path="search/:name" />
    </Router>
  </>
);

export default App;
