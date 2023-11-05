import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import RoleChoice from "../pages/Auth/RoleChoice/RoleChoice";
import Login from "../pages/Auth/Login/Login";
import Monitoring from "../pages/Monitoring/Monitoring";
import MonitoringInside from "../pages/MonitoringInside/MonitoringInside";


function RoutesPage() {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/registration/role-choice" element={<RoleChoice/>}/>
                <Route path="/registration/organization-info" element={<Login/>}/>
                <Route path="/monitoring" element={<Monitoring/>}/>
                <Route path="/monitoring/:id" element={<MonitoringInside/>}/>

            </Route>
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
    );
}

export default RoutesPage;