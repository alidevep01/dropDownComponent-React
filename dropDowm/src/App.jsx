import "./App.css";
import DropDown from "./Components/DropDown";
import content from "./data/content";

function App() {
  return (
    <>
      <div className="main">
        <DropDown data={content} />
      </div>
    </>
  );
}

export default App;
