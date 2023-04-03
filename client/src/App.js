import { Outlet } from "react-router-dom";

import Layout from "./components/layout/Layout";
import "./App.css";
import "./global.css";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
