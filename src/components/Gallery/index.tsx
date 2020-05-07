import React, { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import { Container, Grid, Heading } from "./style";
import Thumbnail from "../Thumbnail";
import api from "../../services/axios";
import debounce from "lodash.debounce";

type PhotosState = {
  photos: [Photos];
  totalPage: number;
  per_page: number;
  total_results?: number;
};

type PhotoSrc = {
  original: string;
  large: string;
  large2x: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

type Photos = {
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: PhotoSrc;
};

type Props = {
  value?: string;
  endpoint?: string;
  heading?: string;
};

const Gallery: React.FC<Props> = ({ heading, endpoint = "/curated?" }) => {
  const [responseData, setResponseData] = useState<PhotosState | never>();
  const [page, setPage] = useState<number>(1);

  const getPictures: Function = async (
    activePage: number,
    endpoint: string
  ): Promise<PhotosState | {}> => {
    const response: AxiosResponse<PhotosState> = await api.get(
      `${endpoint}&page=${activePage}`
    );

    if (!response.data) return {};
    return response.data;
  };

  const setPhotosState: Function = async (
    activePage: number,
    endpoint: string
  ): Promise<void> => {
    const response = await getPictures(activePage, endpoint);
    setResponseData((prevState) => {
      const newObj = { ...prevState, ...response };
      prevState?.photos != undefined &&
        newObj.photos.push(...prevState?.photos);
      newObj.photos.push(...newObj?.photos);
      return newObj;
    });
    return;
  };

  useEffect(() => {
    const onScrollCallback: VoidFunction = debounce((): void => {
      const offset = 500;
      const shouldLoadMore: boolean =
        window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - offset;

      if (shouldLoadMore) {
        return setPage((page) => page + 1);
      }
    }, 100);

    window.addEventListener("scroll", onScrollCallback);
    return (): void => {
      window.removeEventListener("scroll", onScrollCallback);
    };
  }, []);

  useEffect(() => {
    setPhotosState(page, endpoint);
  }, [page]);

  return (
    <Container id="container-grid">
      <Heading>{heading}</Heading>
      <h2>{responseData?.totalPage}</h2>
      <Grid>
        {responseData?.photos.map(
          (
            {
              url,
              photographer,
              photographer_url: photographerUrl,
              src: { medium },
            },
            index
          ) => (
            <Thumbnail
              key={`${url}-${photographer}-${index}`}
              href={url}
              author={photographer}
              authorUrl={photographerUrl}
              src={medium}
            />
          )
        )}
      </Grid>
    </Container>
  );
};

export default Gallery;
