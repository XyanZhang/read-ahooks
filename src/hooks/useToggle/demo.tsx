import React from 'react';
import useToggle from './index'

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle(); // 不传参数，默认boolean

  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>
  );
};