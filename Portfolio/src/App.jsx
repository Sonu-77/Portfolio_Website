import { Route,Routes } from 'react-router-dom'
import contentdata from "./jsondatas/contentdata.json"
import Home from "./components/Home";
import InsideContentSpace from "./components/InsideContentSpace"

function App() {

  let datas=contentdata

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
        
        {/* <InsideContentSpace data={datas}></InsideContentSpace> */}
        
        
    </>
  );
}

export default App;
