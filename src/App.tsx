import React from 'react';
import './App.css';

import { UseToggleDemo1, UseToggleDemo2} from './hooks/useToggle/demo';
import { UseBooleanFormToggleDemo } from './hooks/useBoolean/demo';

function App() {
  return (
    <div className="App">
      <h3>useToggle</h3>
      <UseToggleDemo1></UseToggleDemo1>
      <UseToggleDemo2></UseToggleDemo2>
      <UseBooleanFormToggleDemo></UseBooleanFormToggleDemo>
    </div>
  );
}

export default App;
