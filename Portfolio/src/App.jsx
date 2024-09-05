import contentdata from "./jsondatas/contentdata.json"
import Home from "./components/Home";
import InsideContentSpace from "./components/InsideContentSpace"

function App() {

  let datas=contentdata

  return (
    <>
        {/* <Home></Home> */}
        <InsideContentSpace data={datas}></InsideContentSpace>
        
        
    </>
  );
}

export default App;
