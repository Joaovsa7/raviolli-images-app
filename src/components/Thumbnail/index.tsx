import React, { FunctionComponent, useEffect } from "react";
import { Wrapper, Image, ImageInfos, Container } from "./style";

type ThumbnailProps = {
  src: string;
  href: string;
  author: string;
  authorUrl: string;
};

const Thumbnail: FunctionComponent<ThumbnailProps> = ({
  src,
  href,
  author,
  authorUrl,
}) => {
  useEffect(() => {
    const thumbnailsImages = Array.from<HTMLImageElement>(
      document.querySelectorAll("img")
    );
    if ("IntersectionObserver" in window) {
      const thumbnailsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry: IntersectionObserverEntry) {
          const lazyImage: any = entry.target;
          lazyImage.classList.remove("visible");
          if (entry.isIntersecting) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.add("visible");
            thumbnailsObserver.unobserve(lazyImage);
          }
        });
      });

      thumbnailsImages.forEach((thumb: Element) => {
        thumbnailsObserver.observe(thumb);
      });
    }
  }, []);

  return (
    <Container href={href} target="_blank" rel="noopener noreferer">
      <Wrapper className="thumbnail">
        <Image src={src} lazy={true} data-srcset={src} data-src={src} />
        <ImageInfos>
          <span>{author}</span>
          <span>{authorUrl.replace("https://", "")}</span>
        </ImageInfos>
      </Wrapper>
    </Container>
  );
};

export default Thumbnail;
