import { Route,Routes, useParams } from 'react-router-dom'
import contentdata from "./jsondatas/contentdata.json"
import Home from "./components/Home";
import InsideContentSpace from "./components/InsideContentSpace"

function InsideContentWrapper() {
  const { guide } = useParams();
  const data = contentdata.find((item) => item.route === guide);
  return <InsideContentSpace data={data} />;
}

function App() {

  let datas=contentdata
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home data={datas}></Home>}/>
        <Route path='/home' element={<Home data={datas}></Home>}/>
        <Route path='/:guide' element={<InsideContentWrapper/>}></Route>
      </Routes>
        
        {/* <InsideContentSpace data={datas}></InsideContentSpace> */}
        
        
    </>
  );
}

export default App;
