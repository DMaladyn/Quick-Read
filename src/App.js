import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import MainPage from "./components/pages/mainPage";
import Pyramid from "./components/pages/pyramid";
import Table from "./components/pages/table";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Layout>
  );
}

export default App;
