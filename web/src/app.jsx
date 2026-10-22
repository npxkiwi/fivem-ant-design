import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import Homepage from '.';
import WindowListener from './utils/windowlistener';
import useStore from './state/store';
import isEnvBrowser from './utils/isEnvBrowser';

import './style.css';


export function App() {
	const { visible, setState } = useStore()

  useEffect(() => {
    if (isEnvBrowser()) {
      setState({
        type: 'showUI',
        visible: true,
        data: {}
      });
    }
  }, []);

  return (
      <WindowListener>
        {visible == true ? 
          <Homepage />
        : void (0)}
      </WindowListener>
  )
}


const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
