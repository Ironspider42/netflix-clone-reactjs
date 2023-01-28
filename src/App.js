import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Routes>
        <Route path="/" element={<home />} />
      </Routes>
      <home />
    </>
  );
}

export default App;
