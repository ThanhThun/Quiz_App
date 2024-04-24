import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./Components/Login/login";
import MovePage from "./Components/Move/move";
import HomePage from "./Components/Home/home";
import AdminPage from "./Components/Admin/admin"
import Register from "./Components/Register/register";
import Creator from "./Components/Table/creator";
import Creatortable from "./Components/Table/creatortable";
import Start from "./Components/Start/start";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/creator' element={<Creator/>}/>
      <Route path='/creatortable' element={<Creatortable/>}/>
      <Route path='/start' element={<Start/>}/>
    </Routes>
  );
}

export default App;
