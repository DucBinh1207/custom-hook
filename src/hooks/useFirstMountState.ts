import { useEffect, useRef } from "react";

export default function useFirstMountState() {
  const firstMount = useRef(true);

  useEffect(() => {
    firstMount.current = false;
  }, []);

  return firstMount.current;
}
