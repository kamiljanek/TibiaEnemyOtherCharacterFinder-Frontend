import { useEffect, useState } from "react";

const useDebounce = <T>(val: T, delay: number): T => {
  const [debounceVal, setDebounceVal] = useState<T>(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [val, delay]);

  return debounceVal;
};

export default useDebounce;
