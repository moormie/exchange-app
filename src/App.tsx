import { Route, Routes } from "react-router-dom";
import { CurrencyTablePage } from "./pages/CurrencyPage";

import { NavBar } from "./pages/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CurrencyTablePage />} />
      </Routes>
    </>
  );
}

export default App;
