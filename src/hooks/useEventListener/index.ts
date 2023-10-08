import { useRef } from "react";

// useLatest 返回的永远是最新值，避免闭包问题
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;