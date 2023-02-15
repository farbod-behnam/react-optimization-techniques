import React, { useCallback, useState } from 'react'
import DemoOutput from '../Demo/DemoOutput';
import Button from '../UI/Button/Button';

export default function UseCallbackComponent() {
    const [showParagraph, setShowParagraph] = useState<boolean>(false);
    const [allowToggle, setAllowToggle] = useState<boolean>(false);
  
    console.log("APP RUNNING");
    
  
    const toggleParagraphHandler = useCallback( () => {
      if (allowToggle) {
        setShowParagraph((prevShowParagraphState) => !prevShowParagraphState);
      }
    }, [allowToggle]);
  
    const allowToggleHandler = () => {
      setAllowToggle(true);
    }
  
    return (
      <div className="app">
        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph} />
        <Button onClick={allowToggleHandler}>Allow Toggle</Button>
        <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
      </div>
    );
}
