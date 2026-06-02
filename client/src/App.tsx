import { Routes, Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import CoverPage from "./Pages/CoverPage";
import MyTask from "./Pages/MyTask";
import NewTask from "./Pages/NewTask";
import EditTask from "./Pages/EditTask";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/MyTask" element={<MyTask/>}/>
        <Route path="/NewTask" element={<NewTask/>}/>
        <Route path="/EditTask" element={<EditTask/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;