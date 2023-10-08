import { useEffect } from "react";
import { isFunction } from "../../utils";
import isDev from "../../utils/isDev";
import useLatest from '../useEventListener/index';

export default function useUnmount(fn: Function) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => {
      fnRef.current();
    }
  }, [])
}