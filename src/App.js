import Header from "./components/data/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global/GlobalColors.css";
import "./global/GlobalStyle.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exat path="/" end element={<Home />} />
          <Route exat path="/test" element={<div>test</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
