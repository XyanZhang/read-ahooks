import React from 'react';
import useToggle from '../useToggle'
import useUnmount from './index';

export let UseUnmountDemo = () => {
  const [state, { toggle }] = useToggle(); // 不传参数，默认boolean

  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        {
          state && <Fn2></Fn2>
        }
      </p>
    </div>
  );
};

export function Fn2() {
  useUnmount(() => {
    console.log("我被卸载啦");
  })
  return (<>
    用于useUnmount测试
  </>)
}