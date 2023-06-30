import React from "react";
import pagesData from "./pagesData";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  const pages = pagesData.map((page) => {
    return (
      <Route key={page.title} path={`/${page.path}`} element={page.elmement} />
    );
  });
  return <Routes>{pages}</Routes>;
}
