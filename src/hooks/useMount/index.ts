import { useEffect } from "react";

export default function useMount(fn: Function) {
  useEffect(() => {
    fn();
  }, [])
}