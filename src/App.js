import "./App.css";
//  NOTE : Here we have imported components from container where we connected our actual components.
// we can give any here.
import HomeContainer from "./Containers/HomeContainer";
import TotalItems from "./Containers/TotalItemContainer";
function App() {
  return (
    <div className="App">
      <div className="subApp">
        <h4>Redux Component</h4>
        <div>
          {" "}
          <TotalItems />
        </div>
      </div>
      <HomeContainer />
    </div>
  );
}

export default App;
