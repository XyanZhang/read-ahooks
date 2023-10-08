import React, { useState, useEffect, useRef } from 'react';
import useLatest from './index';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1); // 每次调用setCount的时候，latestCountRef.current 的值都是最新的，当执行setCount后整个函数重新执行，useLatest 接收的count就是最新的值
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};

// 这里直接使用ref，每次setCount 只会在0的基础上+1
export let NotUseLatest = () => {
  const [count, setCount] = useState(0);
  const latestCountRef = useRef(count);

  // useEffect(() => { latestCountRef.current = count; }, [count]); // 利用useEffect 保持count值最新

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
}