import { useState } from "react";
import { NavBar }  from "./componets/navbar/navbar";
import { MenuBar } from "./componets/navbar/menubar";

function App() {
  const [isOpen,setisOpen] = useState(false);
  return (
    <div className="h-screen bg-[#020617] text-white">
      <NavBar setisOpen = {setisOpen}/>
      <MenuBar setisOpen={setisOpen} isOpen={isOpen}/>
      <div className="flex h-screen">
        <div className="flex-2 bg-red-400">Left</div>
        <div className="flex-4 bg-blue-400">Middle</div>
        <div className="flex-2 bg-green-400">Right</div>
      </div>
    </div>
  );
}

export default App;
