import React, { useEffect, useState } from "react";
import { Wrapper, Icon } from "./style";

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const onScrollCallback = (): void => {
      const DISTANCE = 3000;
      const shouldShowButton = window.scrollY > DISTANCE;
      setShowButton(shouldShowButton ? true : false);
    };

    document.addEventListener("scroll", onScrollCallback);
    return (): void => document.addEventListener("remove", onScrollCallback);
  }, []);

  return (
    <Wrapper>
      <Icon
        className={showButton && "slide-entrance"}
        onClick={(): void =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        role="button"
      />
    </Wrapper>
  );
};
export default ScrollToTop;
