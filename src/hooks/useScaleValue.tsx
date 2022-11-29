import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

const useScaleValue = () => {
  const [scaleValue, setScaleValue] = useState(1.2);
  const width = useWindowWidth();

  useEffect(() => {
    if (width) {
      if (width >= 787) {
        setScaleValue(1.2);
      } else if (width < 787 && width >= 674) {
        setScaleValue(1);
      } else {
        setScaleValue(0.5);
      }
    }
  }, [width]);
  return scaleValue;
};

export default useScaleValue;
