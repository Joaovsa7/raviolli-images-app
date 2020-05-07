import React, { useEffect, useState, FormEvent } from "react";
import { navigate } from "@reach/router";
import { Container, Input, Button, Wrapper, InputContainer } from "./style";
import Logo from "../Logo/style";
import api from "../../services/axios";
import { AxiosResponse } from "axios";

const Header: React.FC = () => {
  const [mainPicture, setMainPicture] = useState<string>("");
  const [inputState, setInputState] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const getHeaderPhoto: Function = async () => {
    const response: AxiosResponse = await api.get(
      `/search?query=Sao&Paulo&per_page=1&page=2`
    );
    if (!response.data) return null;

    const {
      data: { photos },
    } = response;
    const [highlightedPicture] = photos;
    setMainPicture(highlightedPicture.src.landscape);
  };

  const handleChange: Function = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    if (!value) return;
    setInputState(value);
  };

  const onSubmit: Function = (e: FormEvent): void => {
    e.preventDefault();
    if (!inputState.length) {
      return setError(true);
    }
    navigate(`/search/${inputState}`);
  };

  useEffect(() => {
    getHeaderPhoto();
  }, []);

  return (
    <Container backgroundImage={mainPicture}>
      <Wrapper>
        <Logo aria-label="Logotipo">Raviolli Images</Logo>
        <InputContainer onSubmit={onSubmit}>
          <Input
            name="search"
            onChange={handleChange}
            type="text"
            placeholder="Beach, Sun, Smartphone..."
            error={error}
          />
          <Button type="submit" aria-label="submit" />
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
