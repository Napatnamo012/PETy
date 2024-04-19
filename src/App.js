import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; //เชื่อม
import Home from './page/home/Home.js';

//นำเข้าข้อมูล
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
