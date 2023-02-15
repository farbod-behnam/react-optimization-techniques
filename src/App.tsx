import { useCallback, useMemo, useState } from "react";
import "./App.css";
import DemoList from "./components/DemoList/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState<string>("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems: number[] = useMemo(() => {
    return [5, 3, 1, 10, 9];
  }, []);

  return (
    // before useMemo
    // <UseCallbackComponent />
    // after useMemo
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
