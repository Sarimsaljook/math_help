import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import UploadFile from "./components/UploadFile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/uploadExam" element={<UploadFile />} />
      </Routes>
    </BrowserRouter>
  );
}