import Header from "./components/data/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global/GlobalStyle.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exat path="/" end element={<div>home</div>} />
          <Route exat path="/test" element={<div>test</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
