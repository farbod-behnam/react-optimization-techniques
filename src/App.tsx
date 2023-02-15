import { useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  console.log("APP RUNNING");
  

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraphState) => !prevShowParagraphState);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
