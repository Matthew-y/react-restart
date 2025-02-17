import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login/index";

function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
