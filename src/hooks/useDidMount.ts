import { useEffect } from "react";

export default function useDidMount() {
  useEffect(() => {
    console.log("DidMount");
  }, []);
}
