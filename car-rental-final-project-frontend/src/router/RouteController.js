import React from 'react';
import {Route, Routes} from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Home from "../client";
import Cars from "../dashboard/components/Cars";
import Reservations from '../dashboard/components/Reservations';
import AddCar from "../client/components/AddCar";

const RouteController = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="admin">
                <Route path="dashboard"  element={<Dashboard/>}>
                    <Route path="cars" element={<Cars/>}/>
                    <Route path="reservations" element={<Reservations/>}/>
                    <Route path="create" element={<AddCar/>}/>
                    <Route path="edit-car/:id" element={<AddCar/>}/>

                    {/*{ (location.pathname === '/admin/dashboard/create') && <AddCar/>}*/}
                    {/*{ (location.pathname === '/admin/dashboard/edit-car/:id') && <AddCar/>}*/}
                </Route>
            </Route>
        </Routes>
    );
};

export default RouteController;