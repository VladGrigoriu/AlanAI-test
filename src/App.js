import React,{ useEffect } from 'react'
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  useEffect(() => {
    alanBtn({
        key: '1d74f852c2c609de7d482cd0acb300c02e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
            if (commandData.command === 'go:back') {
             
                }
            }
    });
}, []);
  return (
    <div>
       

    </div>
    
  );
}

export default App;
