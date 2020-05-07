import React from "react";
import Gallery from "../../components/Gallery";
import { RouteComponentProps } from "@reach/router";

interface SearchPageProps extends RouteComponentProps {
  name?: string;
}

const Search: React.FC<SearchPageProps> = ({ name }) => {
  const queryString = `/search?query=${name}&`;
  return (
    <Gallery heading={`Showing results of: ${name}`} endpoint={queryString} />
  );
};

export default Search;
