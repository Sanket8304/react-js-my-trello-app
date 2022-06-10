import "./App.css";
import NavBar from "./CommonComponents/NavBar";
import Drawer from "./CommonComponents/Drawer";
import { UtilityStyles } from "./Constants/Style";

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <UtilityStyles />

        <NavBar />

        {/* <Drawer /> */}

        <p>Hey this is the trello app!</p>
      </div>
    </div>
  );
}

export default App;
