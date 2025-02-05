import React from "react";
import "./App.css";
import { AppProvider } from "./Context/AppContext";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import MTExportData from "./MTExportData/MTExportData";
import HomePage from "./HomePage/HomePage";
import NewPage from "./NewPage/NewPage";
import FactoryPage from "./FactoryPage/FactoryPage";
import DepartmentPage from "./DepartmentPage/DepartmentPage";

function App() {
  return (
    <AppProvider>
      <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<HomePage />} />
        <Route path="/xuat-du-lieu" element={<MTExportData />} />
        <Route path="/nguoi-dung" element={<NewPage />} />
        <Route path="/nha-may" element={<FactoryPage />} />
        <Route path="/bo-phan" element={<DepartmentPage />} />
        <Route path="/nhom" element={<NewPage />} />
        <Route path="/nhap-du-lieu" element={<NewPage />} />
      </Route>
    </Routes>
    </AppProvider>
  );
}

export default App;
