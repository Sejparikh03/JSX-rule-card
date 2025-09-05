
import { createRoot } from "react-dom/client";

const root=createRoot(document.getElementById("root"));
function JsxCard(){
  return(
  <div className="card">
    <nav className="navbar">
      <img className="logo" src="./src\assets\react.svg" alt="" />
      <h1 className="heading">Rules of JSX</h1>
    </nav>
    <ul className="list">
      <li>Must have a perent element</li>
      <li>Close the tags properly</li>
      <li>Use className instead of class</li>
      <li>Use cameclass for attributes</li>
      <li>For JS use flower braces</li>
      </ul> 
  </div>
);
}

root.render(<JsxCard />);

