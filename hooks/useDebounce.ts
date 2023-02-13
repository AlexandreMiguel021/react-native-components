import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState<T>();
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    let isFresh = true;
    setIsChanging(true);

    setTimeout(() => {
      if (isFresh) {
        setDebouncedValue(value);
        setIsChanging((state) => !state);
      }
    }, delay);

    return () => {
      isFresh = false;
    };
  }, [delay, value]);

  return { debouncedValue, isChanging };
}
