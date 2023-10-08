import React from 'react';
import './App.css';

import { UseToggleDemo1, UseToggleDemo2} from './hooks/useToggle/demo';
import { UseBooleanFormToggleDemo } from './hooks/useBoolean/demo';
import UseLatestDemo, {NotUseLatest} from './hooks/useLatest/demo';

function App() {
  return (
    <>
      <div className="App">
        <h3>useToggle</h3>
        <UseToggleDemo1></UseToggleDemo1>
        <UseToggleDemo2></UseToggleDemo2>
        <UseBooleanFormToggleDemo></UseBooleanFormToggleDemo>
      </div>
      <div className="App">
        <h3>useLatest</h3>
        <UseLatestDemo></UseLatestDemo>
        <NotUseLatest></NotUseLatest>
      </div>
    </>
  );
}

export default App;
