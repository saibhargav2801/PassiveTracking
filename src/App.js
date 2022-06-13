import "./styles.css";

import NoteState from "./components/noteState";
import Header from "./components/header";
import NoteContext from "./components/noteContext";
import Portfolio from "./components/portfolio";
function App() {
  return (
    <NoteState>
    <div className="App">
      <h1 className="head">Welcome To The DashBoard</h1>
      <Header></Header>
      <Portfolio></Portfolio>
    </div>
    </NoteState>
  );
}
export default App;
