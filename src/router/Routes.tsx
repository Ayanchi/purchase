import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

function RoutesPage() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutesPage;