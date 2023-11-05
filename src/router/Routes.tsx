import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import { PersonalArea } from "../pages/manioring/PersonalArea";
import { PersonalAreaSet } from "../pages/manioring/PersonalAreaSet";
import { PersonalAreaProvider } from "../pages/manioring/PersonalAreaProvider";
import RoleChoice from "../pages/Auth/RoleChoice/RoleChoice";
import Login from "../pages/Auth/Login/Login";
import Monitoring from "../pages/Monitoring/Monitoring";
import MonitoringInside from "../pages/MonitoringInside/MonitoringInside";

function RoutesPage() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="area" element={<PersonalArea/>}/>
        <Route path="area/set" element={<PersonalAreaSet/>}/>
        <Route path="area/provider" element={<PersonalAreaProvider/>}/>
        <Route path="/registration/role-choice" element={<RoleChoice/>}/>
                <Route path="/registration/organization-info" element={<Login/>}/>
                <Route path="/monitoring" element={<Monitoring/>}/>
                <Route path="/monitoring/:id" element={<MonitoringInside/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
  }
export default RoutesPage