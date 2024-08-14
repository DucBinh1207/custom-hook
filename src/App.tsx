import { useState } from "react";
import "./App.css";
import ExCustomHook from "./components/ExCustomHook";

function App() {
  const [render, setRender] = useState<boolean>(true);

  return (
    <div className="ml-[100px] mt-[50px]">
      {render && <ExCustomHook />}
      <div
        className="mt-[100px] inline-block cursor-pointer rounded-[5px] bg-red-300 p-[10px]"
        onClick={() => {
          setRender(!render);
        }}
      >
        Render Again
      </div>
    </div>
  );
}

export default App;
