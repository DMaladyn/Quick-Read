import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import MainPage from "./components/pages/mainPage";
import Pyramid from "./components/pages/pyramid";
import Table from "./components/pages/table";

function App() {
  return (
    /* routing system between MainPage, Pyramid and Table */
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Quick-Read" element={<MainPage />} />
        <Route path="/Quick-Read/pyramid" element={<Pyramid />} />
        <Route path="/Quick-Read/table" element={<Table />} />
      </Routes>
    </Layout>
  );
}

export default App;
